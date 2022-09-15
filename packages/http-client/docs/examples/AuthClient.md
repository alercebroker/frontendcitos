# Examples for AuthClient

**Table of contents**

- [Credentials Auth Flow](#credentials-auth-flow)
- [OAuth2 Auth Flow](#oauth2-auth-flow)
- [Verifying session](#verifying-session)

  

## Credentials Auth Flow

```typescript
const { username, password } = SOME_USER_INPUT
// Username and password will come from the frontend

const tokens: SessionTokens = await AuthClient.signIn({ username, password })

// If the credentials are correct, we'll get the auth tokens
console.log(tokens)
```
_Console:_
```bash
{
	access: ACCESS_TOKEN,
	refresh: REFRESH_TOKEN
}
```

## OAuth2 Auth Flow
```typescript
// First, request the Google URL, pass the callback URL
const googleOauthUrl = await AuthClient.getOAuthURL(CALLBACK_URL)
console.log(googleOauthUrl)
```
_Console:_
```bash
https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=CLIENT_ID&redirect_uri=CALLBACK_URL
```
This URL will redirect to the Google Authentication page. When logged in successfully, this page will redirect to the following direction:
```bash
CALLBACK_URL?state=SOME_STATE&code=SOME_CODE&....
```
The callback URL refers to a controlled page or component that will receive the parameters _**state**_ and _**code**_ from the query string, and then use them as parameters for the next step.

```typescript
//this will vary depending on the framework
const { state, code } = req.query

const tokens: SessionTokens = await AuthClient.signInOAuth2(code, state)
console.log(tokens) 
```
_Console:_
```bash
{
	access: ACCESS_TOKEN,
	refresh: REFRESH_TOKEN
}
```
## Verifying session

You may use the following to keep the user logged as long as possible, as well to verify if the session (represented with the access and refresh tokens) is still valid.
```typescript
// TokenStorage is an abstraction of the way the app stores the token
const tokens: SessionTokens = TokensStorage.get()
const [activeUser, sessionTokens] = AuthClient.verifySession(tokens)
```
There are many outcomes from ``verifySession`` depending on the state of the session:

 - **Access token is still valid:** returns the active user and the same set of tokens which are passed to the method.
 - **Access token is stale but the refresh token is valid:** returns the active user and a new set of tokens which contains a new access token. Don't forget to handle this scenario.
 - **Both tokens are stale:** the method will throw an error