import { ref } from "vue";
import { defineStore } from "pinia";
import type { TokenHandler } from "./auth/tokenhandler.types";
import { oauthFactory } from "./auth/oauth";
import { credentialsAuthFactory } from "./auth/credentials";

export function authStoreFactory(
  tokenHandler: TokenHandler<{ access: string; refresh: string }>
) {
  const _oauth = oauthFactory(tokenHandler);
  const _credentials = credentialsAuthFactory(tokenHandler);

  return defineStore("auth", () => {
    const oauthWindow = ref<Window | null>(null);
    const checkWindowInterval = ref<any>(null);
    const loggedUser = ref({
      isLogged: false,
      user: "",
    });
    // add alerts when logout failed :D

    function _onPopupClosed() {
      return _oauth.verifySession();
    }

    async function oauthLoginPopup(callbackUrl: string) {
      const url = await _oauth.getUrl(callbackUrl);
      oauthWindow.value = window.open(url);
      checkWindowInterval.value = setInterval(() => {
        if (oauthWindow.value && !oauthWindow.value.closed) return;
        _onPopupClosed();
        clearInterval(checkWindowInterval.value);
      }, 250);
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
      return _credentials.signOut();
    }

    async function verifySession() {
      try {
        const user = await _oauth.verifySession();
        loggedUser.value = {
          isLogged: true,
          user: user.username,
        };
        return user;
      } catch {
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
