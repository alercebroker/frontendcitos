# Credentials and OAuth2 Authentication

ALeRCE has two ways of authenticating users, which are credentials login (or username-password) and OAuth2 using the Google API.
Both work differently, and it's important for developers to know how they work before implementing them in the different clients.

**Table of Contents**
- [Credentials Authentication](#credentials-authentication)
- [OAuth2 Authentication](#oauth2-authentication)


## Credentials Authentication
This one is quite intuitive. The user must previously have created an account in the ALeRCE users service. In that process, they must provide some information, like their email, full name and role in their institution, just to name a few. After that, the user will receive an email for account confirmation.
Followed the email instructions, the user will be able to get their authentication tokens using the username and password chosen during the registration process. Those tokens will be used to further authorization in other ALeRCE's services.

**Example of a authentication with credentials**
```mermaid
sequenceDiagram
Client->> AuthService: Creates account (POST /users)
AuthService-->>Client: Sends confirmation email
Client->> AuthService: Clicks the confirmation link (GET /users/confirm)
Note right of AuthService: Now the user is <br/>ready to authenticate!

Client->>AuthService: User logs with username and password (POST /users/login)
AuthService-->>Client: Returns access and refresh tokens
```

## OAuth2 Authentication
This one might be a little tricky! Instead of using username and password stored in the ALeRCE Authentication service, the user can use a Google Account to achieve the same goal. For that, the ALeRCE Authentication service will facilitate a Google OAuth2 path, that will (re)direct the user to the well-known Google login page (it won't happen if the user is already logged in with one -and just one- Google account). It's important to notice that this Google path requires a callback URL. This path will receive as query params a lot of info. The developer must use the *state* and *code* params from this query in the client side. After that, those parameters must be sent to the ALeRCE Authentication service to finish the process, that will end with the service returning a set of access and refresh tokens (that will work the same as the tokens in the previous section!)

**OAuth flow in ALeRCE**
```mermaid
sequenceDiagram
Client->> AuthService: Requests the Google Auth URL<br/>(GET /users/social/o/google-oauth2)
Note right of Client: The request contains a redirect URL!
AuthService->>Google: Service requests the URL
Google-->> AuthService: Returns the URL
AuthService-->>Client: Responds with the URL
Client->>Google: Client enters the URL and logs in
Google->>Client: Google redirects to the URL provided at the beginning
Note left of Google: This redirection contains a lot of queries
Client->>AuthService: Client sends the 'state' and 'code'
AuthService->>Google: Verifies 'state' and 'code'
Google-->>AuthService: Responds with access and refresh tokens
AuthService-->>Client: Sends access and refresh tokens
```
Still a little lost? You can check the code examples in the next sections.