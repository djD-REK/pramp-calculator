// Run test suite with: yarn mocha tests/*

const expect = require("chai").expect

const { Calculator } = require("../src/Calculator.js")

const calculate = Calculator()

describe("Calculator()", function () {
  it("should add 2+2", function () {
    expect(calculate("2+2")).to.equal(4)
  })

  it("should subtract 2-2", function () {
    expect(calculate("2-2")).to.equal(0)
  })

  it("should multiply 2*2", function () {
    expect(calculate("2*2")).to.equal(4)
  })

  it("should divide 2/2", function () {
    expect(calculate("2/2")).to.equal(1)
  })

  it("should add 37+37", function () {
    expect(calculate("37+37")).to.equal(74)
  })

  it("should subtract 37-37", function () {
    expect(calculate("37-37")).to.equal(0)
  })

  it("should multiply 37×37", function () {
    expect(calculate("37×37")).to.equal(1369)
  })

  it("should divide 37÷37", function () {
    expect(calculate("37÷37")).to.equal(1)
  })

  it("should accept multiple additions and subtractions 37+37-37-37", function () {
    expect(calculate("37+37-37-37")).to.equal(-74)
  })

  it("should accept multiple multiplications and divisions 37÷37×37*37/37×37", function () {
    expect(calculate("37÷37×37*37/37×37")).to.equal(1369)
  })

  it("should handle order of operations with division 37-37+37÷37", function () {
    expect(calculate("37-37+37÷37")).to.equal(1)
  })

  it("should handle order of operations with multiplication 37+37-37×37", function () {
    expect(calculate("37-37+37÷37")).to.equal(1)
  })
})
