// @flow
import { createStore } from 'redux';

// Reducer Receive State-Status
function addItem(state = [], action) {
  switch (action.type) {
    case 'ADD_ITEM':
      return [action.text, ...state]
    default:
      return state
  }
}

// add REDUX-DEVTOOLS_EXTENSION
const store = createStore(
  addItem,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// render -> get data of state from store
function render() {

  const items = store.getState().map((item) =>
    (item) ? `<li>${item}</li>` : ''
  )

  document.getElementById('itemlist').innerHTML = `<ul>${items.join('')}</ul>`
}

// page-load (first time)

render()

// subscribe to store, and reload render as state changed..

store.subscribe(render)

// click event listener
document.getElementById('itemadd')
  .addEventListener('click', () => {

    const itemText = document.getElementById('itemtext')

    if (itemText instanceof HTMLInputElement) {

      // Action dispatch
      store.dispatch({ type: 'ADD_ITEM', text: itemText.value })

      itemText.value = ''
    }
  })