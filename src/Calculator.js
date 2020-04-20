const Calculator = () => {
  returnValue = (inputString) => {
    // Operators are always a single character, so we can split the display
    // string by the operators to get an array of numbers, which we coerce:
    const parsedNumbers = inputString
      .split(/\+|\-|\×|\÷|\*|\//g)
      .map((number) => {
        const parsedNumber = Number(number)
        Number.isNaN(parsedNumber)
          ? console.log(`"${number}" could not be parsed and was stored as NaN`)
          : false
        returnValue = parsedNumber
      })
    // Because numbers can be multiple digits, integers or with a decimal
    // point, first we remove all the numbers, then we split the string:
    const parsedOperators = inputString.replace(/[0-9]|\./g, "").split("")

    const returnValue = 0

    for (
      let numbersIndex = 0;
      numbersIndex < parsedNumbers.length;
      numbersIndex += 2
    ) {
      const operator = parsedOperators[numbersIndex]

      switch (operator) {
        case "+":
          returnValue +=
            parsedNumbers[numbersIndex] + parsedNumbers[numbersIndex + 1]
          break
        case "-":
          returnValue +=
            parsedNumbers[numbersIndex] - parsedNumbers[numbersIndex + 1]
          break
        case "*":
        case "×":
          returnValue +=
            parsedNumbers[numbersIndex] * parsedNumbers[numbersIndex + 1]
          break
        case "/":
        case "÷":
          returnValue +=
            parsedNumbers[numbersIndex] / parsedNumbers[numbersIndex + 1]
          break
        default:
          console.log(`Unknown operator "${operator}"`)
          returnValue = NaN
      }
    }

    return returnValue
  }
}

module.exports = {
  Calculator
}
