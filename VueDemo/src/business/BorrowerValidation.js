import * as Utils from '../Utils'

export function isBorrowerValid (borrower) {
  return {
    homePhoneValid: Utils.isNullOrWhiteSpace(borrower.homePhone) === false,
    emailValid: Utils.isNullOrWhiteSpace(borrower.email) === false,
    yearsOfSchoolValid: Utils.isIntegerGreaterThanZero(borrower.yearsOfSchool),
    numberOfDependentsValid: Utils.isPositiveInteger(borrower.numberOfDependents),
    dependentAgesValid: areDependentAgesValid(borrower.dependentAges, borrower.numberOfDependents),

    isSuccessful () {
      return this.homePhoneValid && this.emailValid && this.yearsOfSchoolValid &&
        this.numberOfDependentsValid && this.dependentAgesValid
    }
  }
}

function areDependentAgesValid (dependentAgesString, numberOfDependents) {
  if (Utils.isIntegerGreaterThanZero(numberOfDependents) === false) {
    return true
  }

  if (Utils.isNullOrWhiteSpace(dependentAgesString)) {
    return false
  }

  return dependentAgesString
    .split(',')
    .reduce((accumulator, currentValue) => accumulator && Utils.isIntegerGreaterThanZero(currentValue))
}
