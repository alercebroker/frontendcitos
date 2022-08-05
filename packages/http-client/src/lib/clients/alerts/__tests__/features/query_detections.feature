Feature: Query object's detections
  Use ALeRCE ID to retrieve the detections of that object

  Scenario: Query by AID
    Given the API responds with success
    When I make a call to queryDetections with AID
    Then I should get a list of detections