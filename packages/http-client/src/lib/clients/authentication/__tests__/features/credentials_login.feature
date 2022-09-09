Feature: Login using credentials
  Use username and password to receive authentication tokens

  Scenario: Getting current username
    Given the users API responds with success
    When I make a call to current user
    Then I should get an user object

  Scenario: Logging in with credentials
    Given the users API responds with success
    When I make a request to login with valid username and password
    Then I should get an access and refresh token