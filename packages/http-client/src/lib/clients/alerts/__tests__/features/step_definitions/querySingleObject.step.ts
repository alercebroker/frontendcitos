import { Then, When } from "@cucumber/cucumber"
import { strict } from "assert"
import { singleObjectResponse } from "../../../AlertsClient.types"
import { exampleQuerySingleObject } from "../../../__examples__/AlertsClient.example"

When('I make a call to querySingleObject with aid', async function () {
    try {
        const result = await exampleQuerySingleObject()
        this.result = result
    } catch (exception) {
        this.err = exception
    }
})

Then('I should get a single object', function () {
    const result: singleObjectResponse = this.result
    strict.equal(result.aid, 'aid123')
})
