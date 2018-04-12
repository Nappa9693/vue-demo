import * as Utils from '../../../src/Utils';

describe('Tests the isIntegerGreaterThanZero function with various values', () => {
  it('should return true when given an integer greater than zero', () => {
    expect(Utils.isIntegerGreaterThanZero(10)).toEqual(true)
  })

  it('should return true when given string that represents an integer greater than zero', () => {
    expect(Utils.isIntegerGreaterThanZero('10')).toEqual(true)
  })

  it('should return false when given a negative integer', () => {
    expect(Utils.isIntegerGreaterThanZero(-10)).toEqual(false)
  })

  it('should return false when given a string representing a negative integer', () => {
    expect(Utils.isIntegerGreaterThanZero('-10')).toEqual(false)
  })

  it('should return false when given a null value', () => {
    expect(Utils.isIntegerGreaterThanZero(null)).toEqual(false)
  })
})

describe('Tests the isPositiveInteger function with various values', () => {
  it('should return true when given an integer greater than zero', () => {
    expect(Utils.isPositiveInteger(10)).toEqual(true)
  })

  it('should return true when given string that represents an integer greater than zero', () => {
    expect(Utils.isPositiveInteger('10')).toEqual(true)
  })

  it('should return false when given a negative integer', () => {
    expect(Utils.isPositiveInteger(-10)).toEqual(false)
  })

  it('should return false when given a string representing a negative integer', () => {
    expect(Utils.isPositiveInteger('-10')).toEqual(false)
  })

  it('should return false when given a null value', () => {
    expect(Utils.isPositiveInteger(null)).toEqual(false)
  })

  it('should return true when given a value of zero', () => {
    expect(Utils.isPositiveInteger(0)).toEqual(true)
  })

  it('should return true when given a string representing the value of zero', () => {
    expect(Utils.isPositiveInteger('0')).toEqual(true)
  })
})
