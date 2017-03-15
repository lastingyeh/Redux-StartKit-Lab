// @flow
import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../action'

const ItemInput = (props: any) => {

  let input: any = null

  const { onItemAdd, onFetchData } = props

  return (
    <form onSubmit={(e:Event) => {

      e.preventDefault()

      console.log('onSubmit region')

      if(!input.value.trim()){
        return
      }

      onItemAdd(input.value)

      input.value = ''
    }}
    >
      <input ref={(node:any) => input=node} />
      <button type="submit">
        Add Items
      </button>
      <button onClick={() => onFetchData()}>
        Fetch Items
      </button>
    </form>
  )
}

export default connect(null, actionCreators)(ItemInput)