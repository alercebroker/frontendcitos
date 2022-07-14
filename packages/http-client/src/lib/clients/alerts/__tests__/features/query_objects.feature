Feature: Query list of objects
  Use filters to retrieve a paginated list of objects filtered by the specified arguments

  Scenario: Query by ALeRCE ID
    Given the API responds with success
    When I make a call to queryObjects with aid
    Then I should get a list of objects

   Scenario: Query by discovery date
     Given the API responds with success
     When I make a call to queryObjects with date filters
     Then I should get a list of objects

   Scenario: Query by conesearch
     Given the API responds with success
     When I make a call to queryObjects with coordinate filters
     Then I should get a list of objects

   Scenario: Query fails
     Given the API responds with error
     When I make a call to queryObjects with aid
     Then I should get an error
