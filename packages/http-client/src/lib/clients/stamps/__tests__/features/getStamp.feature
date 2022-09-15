Feature: Get Stamp in PNG format
  Find an AVRO with the given candid and retrieve the specified stamp in PNG format.

  Scenario: Query with an existing candid
    Given the candid exists
    When I make a call to getStamp
    Then I should get a response with a binary object

  Scenario: Query with an existing candid and custom parser to transform result to URL
    Given the candid exists
    When I make a call to getStamp with an URL parser
    Then I should get a response with an URL string

  Scenario: Query with a non existent candid
    Given the candid does not exist
    When I make a call to getAvroJson
    Then I should get an error response
