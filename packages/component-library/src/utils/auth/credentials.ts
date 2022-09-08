import type { TokenHandler } from "./tokenhandler.types";
import { AuthClient } from "@alercebroker/http-client";
import type { UserSchema } from "@alercebroker/http-client/build/main/lib/clients/authentication/AuthClient.types";
import { verifySession as genericVerifySession } from "./common";

//To-do implement neverthrow
export function credentialsAuthFactory(
  tokenHandler: TokenHandler<{ access: string; refresh: string }>,
  baseUrl?: string
) {
  const config = {
    baseUrl,
    withCredentials: true,
    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log("credentials baseurl", baseUrl);

  async function signIn(username: string, password: string) {
    try {
      const tokens = await AuthClient.signIn({ username, password }, config);
      tokenHandler.storeToken(tokens);
    } catch (e) {
      throw e;
    }
  }

  function signOut() {
    tokenHandler.clearToken();
  }

  async function verifySession(): Promise<UserSchema> {
    return genericVerifySession(tokenHandler, config);
  }

  return {
    signIn,
    verifySession,
    signOut,
  };
}
