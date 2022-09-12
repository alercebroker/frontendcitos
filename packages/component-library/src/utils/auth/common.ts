import { AuthClient } from "@alercebroker/http-client";
import type { TokenHandler } from "./tokenhandler.types";

export async function verifySession(tokenHandler: TokenHandler<any>, config?: any) {
  const tokens = tokenHandler.getToken();
  try {
    const [user, updatedTokens] = await AuthClient.verifySession(tokens, config);
    if (updatedTokens.access !== tokens.access)
      tokenHandler.storeToken(updatedTokens);
    return user;
  } catch (e) {
    tokenHandler.clearToken();
    throw e;
  }
}
