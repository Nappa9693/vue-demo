import * as Utils from '../Utils';

export function isBorrowerValid(borrower) {
  return {
    homePhoneValid: !Utils.isNullOrWhiteSpace(borrower.homePhone),
    email: !Utils.isNullOrWhiteSpace(borrower.email),
    yearsOfSchoolValid: Utils.isIntegerGreaterThanZero(borrower.yearsOfSchool),
    numberOfDependentsValid: Utils.isPositiveInteger(borrower.numberOfDependents),
    dependentAgesValid: areDependentAgesValid(borrower.dependentAges, borrower.numberOfDependents)
  };
}

function areDependentAgesValid(dependentAgesString, numberOfDependents) {
  if (Utils.isNullOrWhiteSpace(dependentAgesString) && Utils.isIntegerGreaterThanZero(numberOfDependents)) return false;

  return dependentAgesString
    .split(',')
    .reduce((accumulator, currentValue) => accumulator && Utils.isIntegerGreaterThanZero(currentValue));
}
