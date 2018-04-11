import BorrowerModel from '../../../src/models/BorrowerModel';

const mockBorrower = new BorrowerModel()

export function getBorrowerWithId(id) {
  return {
    then: (resolve) => resolve(mockBorrower)
  }
}
