import 'whatwg-fetch'
import * as Business from '@/business/BorrowerValidation'

export function getBorrowerWithId (id) {
  return fetch(`/api/Borrower/${id}`)
    .then((response) => {
      return response.json()
    })
}

export function updateBorrower (borrower) {
  let validationResult = Business.isBorrowerValid(borrower)

  if (validationResult.isSuccessful() === false) {
    return validationResult
  }

  // TODO: Add response status checking, error handling, etc.
  fetch('/api/Borrower', {
    method: 'POST',
    body: JSON.stringify(borrower),
    headers: {
      'Content-Type': 'application/json'
    },
    credentials: 'same-origin'
  })

  return null
}
