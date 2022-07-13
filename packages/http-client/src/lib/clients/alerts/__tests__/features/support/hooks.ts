import { Before } from "@cucumber/cucumber";
import { container } from "../../../../../../container/container";

Before(() => {
    container.bind("testType").toConstantValue("success")
})
