Feature: Get Avro Information in JSON format
  Find an avro by candid and retrieve its data in JSON format. Direct usage of the /get_avro_info endpoint.

  Scenario: Query with an existing candid
    Given the candid exists
    When I make a call to getAvroJson
    Then I should get a response with the avro info

  Scenario: Query with a non existent candid
    Given the candid does not exist
    When I make a call to getAvroJson
    Then I should get an error response
