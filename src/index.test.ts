import { describe, it } from "mocha";
import {assert} from "chai"
import { addTS } from "src";

describe("Adds two numbers", () => {
    it("Adds 1 and 2", () => {
        assert.equal(addTS(1, 2), 3)
    })
})