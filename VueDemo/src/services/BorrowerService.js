import 'whatwg-fetch'

export function getBorrowerWithId (id) {
  return fetch(`/api/Borrower/${id}`)
    .then((response) => {
      return response.json()
    })
}
