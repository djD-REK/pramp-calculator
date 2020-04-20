const Calculator = () => {
  return (inputString) => {
    // Operators are always a single character, so we can split the display
    // string by the operators to get an array of numbers, which we coerce:
    const parsedNumbers = inputString.split(/\+|\-|\×|\÷/g).map((number) => {
      const parsedNumber = Number(number)
      Number.isNan(parsedNumber)
        ? console.log(`"${number}" could not be parsed and was stored as NaN`)
        : false
      return parsedNumber
    })
    // Because numbers can be multiple digits, integers or with a decimal
    // point, first we remove all the numbers, then we split the string:
    const parsedOperators = inputString.replace(/[0-9]|\./g, "").split("")

    const operator = parsedOperators[0]

    switch (operator) {
      case "+":
        return parsedNumbers[0] + parsedNumbers[1]
        break
      default:
        console.log(`Unknown operator "${operator}"`)
    }

    return Number(inputString)
  }
}

module.exports = {
  Calculator
}
