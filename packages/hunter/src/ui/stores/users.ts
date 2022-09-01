import { ref } from "vue";
import { AuthClient } from "@alercebroker/http-client";
import { defineStore } from "pinia";
import { useLocalStorage } from "../components/hooks";
import { SessionTokens } from "@alercebroker/http-client/build/main/lib/clients/authentication/AuthClient.types";

const DEV_AUTH_URL = "https://dev.users.alerce.online";

export const useAuthentication = defineStore("auth", () => {
  const userLogged = ref({
    isLogged: false,
    user: "",
  });

  const [token, setToken] = useLocalStorage("authToken");

  async function login(username: string, password: string) {
    try {
      const sessionTokens = await AuthClient.signIn(
        { username, password },
        { baseUrl: DEV_AUTH_URL }
      );
      console.log("Logged in!", sessionTokens);
      setToken(JSON.stringify(sessionTokens));
      userLogged.value = {
        isLogged: true,
        user: username,
      };
    } catch (e) {
      console.error("Error logging in", e);
    }
  }

  async function verifySession() {
    try {
      const session: SessionTokens = JSON.parse(token.value) as SessionTokens;
      const user = await AuthClient.verifySession(session, {
        baseUrl: DEV_AUTH_URL,
        accessToken: session.access,
      });
      userLogged.value = {
        isLogged: true,
        user: user.username,
      };
    } catch (e) {
      console.error("Error verifying session", e);
    }
  }

  return {
    userLogged,
    login,
    verifySession,
  };
});
