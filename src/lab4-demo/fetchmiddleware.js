// @flow
import { FETCH_ITEMS } from './actionTypes'

const fetchMiddleware = (store: any) => (next: any) => (action: Object) => {

  console.log('fetchMiddleware store', store)
  console.log('fetchMiddleware action', action)

  if (action.type !== FETCH_ITEMS) return next(action)

  fetch('http://localhost:5555/items/')
    .then(response => response.json())
    .then(json => action.cb(json, store.dispatch))
    .catch((err) => {
      console.error(err)
      throw new Error(err.message)
    })
}

export default fetchMiddleware