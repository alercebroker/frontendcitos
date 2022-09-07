import type { TokenHandler } from "./tokenhandler.types";
import { AuthClient } from "@alercebroker/http-client";
import type { UserSchema } from "@alercebroker/http-client/build/main/lib/clients/authentication/AuthClient.types";
import { verifySession as genericVerifySession } from "./common";

export function oauthFactory(
  tokenHandler: TokenHandler<{ access: string; refresh: string }>,
  env = "production"
) {
  let config =
    env !== "production"
      ? { baseUrl: "https://dev.users.alerce.online" }
      : undefined;

  function getUrl(callbackUrl: string): Promise<string> {
    return AuthClient.getOAuth2Url(callbackUrl, config);
  }
  async function signIn(code: string, state: string) {
    try {
      const session = await AuthClient.signInWithOAuth2(code, state, config);
      const { access, refresh } = session;
      tokenHandler.storeToken({ access, refresh });
    } catch (e) {
      throw e;
    }
  }

  function signOut() {
    tokenHandler.clearToken();
  }

  function verifySession(): Promise<UserSchema> {
    return genericVerifySession(tokenHandler, config);
  }

  return {
    getUrl,
    signIn,
    signOut,
    verifySession,
  };
}
