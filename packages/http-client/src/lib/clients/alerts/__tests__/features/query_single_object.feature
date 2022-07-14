Feature: Query single object
  Use aid to retrieve a single object

  Scenario: Query Single Object by ALeRCE ID
    Given the API responds with success
    When I make a call to querySingleObject with aid
    Then I should get a single object
