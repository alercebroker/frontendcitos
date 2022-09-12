Feature: Login using Google OAuth2
  Use Google OAuth2 to receive the authentication tokens

  Scenario: Getting OAuth URL
    Given the users API responds with success
    When I make a call to the social endpoint
    Then I should get an authorization url

  Scenario: Logging in with code and state from Google Authentication
    Given the users API responds with success
    When I make a call to the endpoint with code and state params
    Then I should get an access and refresh token from Google