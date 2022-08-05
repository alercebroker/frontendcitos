import { Then, When } from "@cucumber/cucumber";
import { strict } from "assert";
import { DetectionItem } from "../../../AlertsClient.types";
import { exampleQueryObjectDetections } from "../../../__examples__/AlertsClient.example";

When('I make a call to queryDetections with AID', async function() {
  try {
    const result = await exampleQueryObjectDetections()
    this.result = result;
  } catch (error) {
    this.err = error;
  }
})

Then('I should get a list of detections', function () {
  const result: DetectionItem[] = this.result;
  strict.equal(result[0].candid, "candid");
})