// @flow

import { ADD_ITEM, FETCH_ITEMS, INIT_ITEMS, DEL_ITEM } from './actionTypes'

export const onItemAdd = (text: string) => ({
    type: ADD_ITEM,
    id: +new Date(),
    text,
  }
)

export const onItemDel = (id: number) => ({ type: DEL_ITEM, id })

// to action
export const onInitData = (items: Array<Object>) => ({
  type: INIT_ITEMS, items
})

// side effect function
// to fetchMiddleware,then back to action
export const onFetchData = () => ({
  type: FETCH_ITEMS,
  cb: (response: Array<Object>, dispatch: Function) => dispatch(onInitData(response)),
})


// use thunk replace user-defined 'fetchmiddleware'
// () => (dispatch,getStat) => {...}
export const onItemAddAsync = text => dispatch => {

  console.log('onItemAddAsync', text)

  setTimeout(() => {
    dispatch(onItemAdd(text))
  }, 3000)
}

export const onItemAddAsyncLimit = text => (dispatch, getState) => {

  console.log('onItemAddAsyncLimit getState', getState())

  if (getState().items.length < 7) {
    setTimeout(() => {
      dispatch(onItemAdd(text))
    }, 1000)
  } else {
    console.log('items limit by 7,delete old items and reEntry')
  }
}