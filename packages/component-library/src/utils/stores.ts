import { ref } from "vue";
import { defineStore } from "pinia";
import type { TokenHandler } from "./auth/tokenhandler.types";
import { oauthFactory } from "./auth/oauth";
import { credentialsAuthFactory } from "./auth/credentials";

export function authStoreFactory(
  tokenHandler: TokenHandler<{ access: string; refresh: string }>,
  baseUrl?: string
) {
  const _oauth = oauthFactory(tokenHandler, baseUrl);
  const _credentials = credentialsAuthFactory(tokenHandler, baseUrl);

  return defineStore("alerceAuth", () => {
    const loggedUser = ref({
      isLogged: false,
      user: "",
    });

    async function oauthLoginPopup(callbackUrl: string) {
      try {
        const url = await _oauth.getUrl(callbackUrl);
        return window.open(url);
      } catch {
        setErrorMessage("Error getting OAuth URL");
      }
    }

    async function oauthLogin(code: string, state: string) {
      try {
        await _oauth.signIn(code, state);
      } catch {
        setErrorMessage("Error logging in with Google OAuth");
      }
    }

    async function credentialsLogin(username: string, password: string) {
      try {
        await _credentials.signIn(username, password);
        loggedUser.value = {
          isLogged: true,
          user: username,
        };
      } catch (e) {
        setErrorMessage("Invalid username or password");
      }
    }

    function logout() {
      _credentials.signOut();
      loggedUser.value = {
        isLogged: false,
        user: "",
      };
    }

    async function verifySession() {
      try {
        const user = await _oauth.verifySession();
        loggedUser.value = {
          isLogged: true,
          user: user.username,
        };
        return user;
      } catch (e) {
        setErrorMessage("Session expired, please try logging again");
      }
    }

    const error = ref({
      isDismissed: true,
      message: "",
    });

    function setErrorMessage(message: string) {
      error.value = {
        isDismissed: false,
        message,
      };
    }

    function dismissError() {
      error.value = {
        isDismissed: false,
        message: "",
      };
    }

    return {
      loggedUser,
      oauthLogin,
      oauthLoginPopup,
      credentialsLogin,
      logout,
      verifySession,
      error,
      dismissError,
    };
  });
}
