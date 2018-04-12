export function isNullOrWhiteSpace (stringToEvaluate) {
  // Borrowed from here: https://stackoverflow.com/questions/10232366/javascript-check-if-null-or-white-space-or-no-space/10232792
  return stringToEvaluate === null || stringToEvaluate.match(/^ *$/) !== null
}

export function isPositiveInteger (numberString) {
  if (Number.isInteger(parseFloat(numberString)) === false) {
    return false
  }

  let value = Number.parseInt(numberString, 10)
  return value >= 0
}

export function isIntegerGreaterThanZero (numberString) {
  if (Number.isInteger(parseFloat(numberString)) === false) {
    return false
  }

  let value = Number.parseInt(numberString, 10)
  return value > 0
}
