import { ref } from "vue";
import { defineStore } from "pinia";
import type { TokenHandler } from "./auth/tokenhandler.types";
import { oauthFactory } from "./auth/oauth";
import { credentialsAuthFactory } from "./auth/credentials";

export function authStoreFactory(
  tokenHandler: TokenHandler<{ access: string; refresh: string }>,
  environment = "production"
) {
  const _oauth = oauthFactory(tokenHandler, environment);
  const _credentials = credentialsAuthFactory(tokenHandler, environment);

  return defineStore("alerceAuth", () => {
    const oauthWindow = ref<Window | null>(null);
    let checkWindowInterval: any;
    const loggedUser = ref({
      isLogged: false,
      user: "",
    });
    // add alerts when logout failed :D

    async function oauthLoginPopup(callbackUrl: string) {
      const url = await _oauth.getUrl(callbackUrl);
      return window.open(url);
    }

    function oauthLogin(code: string, state: string) {
      return _oauth.signIn(code, state);
    }

    async function credentialsLogin(username: string, password: string) {
      try {
        await _credentials.signIn(username, password);
        loggedUser.value = {
          isLogged: true,
          user: username,
        };
      } catch (e) {
        console.error("Invalid username or password");
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
        console.error(e);
        console.error("Please login again!");
      }
    }

    return {
      loggedUser,
      oauthLogin,
      oauthLoginPopup,
      credentialsLogin,
      logout,
      verifySession,
    };
  });
}
