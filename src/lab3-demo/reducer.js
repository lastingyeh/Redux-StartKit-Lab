// @flow

import { combineReducers } from 'redux'

const items = (state = [], action) => {

  //const { id, text, isEditing } = action.payload

  switch (action.type) {

    case 'ADD_ITEM':
      return [{ id: action.payload.id, text: action.payload.text, isEditing: action.payload.isEditing },
        ...state]

    case 'DEL_ITEM':
      return state.filter(item => item.id !== action.id)

    case 'EDIT_ITEM':

      return state.map(item => {
        if (item.id === action.payload.id) {
          item.text = action.payload.text
          item.isEditing = action.payload.isEditing
        }
        return item
      })

    default:
      return state
  }
}

const itemApp = combineReducers({ items, })

export default itemApp