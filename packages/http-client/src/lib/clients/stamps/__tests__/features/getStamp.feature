Feature: Get Stamp in PNG format
  Find an AVRO with the given candid and retrieve the specified stamp in PNG format.

  Scenario: Query with an existing candid
    Given the candid exists
    When I make a call to getStamp
    Then I should get a response with a binary object

  Scenario: Query with an existing candid and importing custom parser to transform result base64
    Given the candid exists
    When I make a call to getStamp with the imported base64 parser
    Then I should get a response with a base64 string

  Scenario: Query with a non existent candid
    Given the candid does not exist
    When I make a call to getAvroJson
    Then I should get an error response
