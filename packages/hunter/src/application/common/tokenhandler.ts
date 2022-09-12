import { useLocalStorage } from "@/ui/components/hooks";

export type Tokens = {
  access: string;
  refresh: string;
};

interface TokenHandler {
  getToken: () => Tokens;
  storeToken: (tokens: Tokens) => void;
  clearToken: () => void;
}

export function LocalTokenHandler(): TokenHandler {
  function getToken(): Tokens {
    const [token, _] = useLocalStorage("authToken");
    return JSON.parse(token.value) as Tokens;
  }

  function storeToken(tokens: Tokens) {
    const [_, setToken] = useLocalStorage("authToken");
    return setToken(JSON.stringify(tokens));
  }

  function clearToken() {
    const [_, setToken] = useLocalStorage("authToken");
    return setToken("");
  }

  return {
    getToken,
    storeToken,
    clearToken,
  };
}
