import * as BorrowerValidation from '@/business/BorrowerValidation';
import BorrowerModel from '@/models/BorrowerModel';

describe('Tests the isBorrowerValid method with valid borrower', () => {
  it('should return a successful result', () => {
    let validBorrower = new BorrowerModel()
    validBorrower.id = 1
    validBorrower.homePhone = '1112223333'
    validBorrower.email = 'test@ethostesting.com'
    validBorrower.numberOfDependents = 0
    validBorrower.yearsOfSchool = 10
    validBorrower.dependentAges = ''

    let validationResult = BorrowerValidation.isBorrowerValid(validBorrower)
    expect(validationResult.isSuccessful()).toEqual(true)
  })
})
