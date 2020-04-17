// Run test suite with: yarn mocha tests/*

const expect = require("chai").expect
require("mocha-sinon")

const { Calculator } = require("../src/Calculator.js")

const calculate = Calculator()

describe("Calculator()", function () {
  it("should add 2+2", function () {
    expect(calculate("2+2")).to.equal(4)
  })
})
