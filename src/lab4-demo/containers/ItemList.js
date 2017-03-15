import React from 'react'
import { connect } from 'react-redux'
import * as actionCreators from '../action'

const ItemList = (props: any) => {

  const { items, onItemDel, onItemAddAsync, onItemAddAsyncLimit } = props

  return (
    <div>
      <button onClick={()=>onItemAddAsync('text')}>Async Click</button>
      <button onClick={()=>onItemAddAsyncLimit('textLimit')}>onItemAddAsyncLimit</button>
      <p>
        {
          items.map(item => (
            <li key={item.id}>
              <input type="checkbox"
                     id={item.id}
                     onClick={()=>onItemDel(item.id)}
              />
              {item.text}
            </li>
          ))
        }
      </p>
    </div>

  )
}

const mapStateToProps = state => ({ items: state.items })

export default connect(mapStateToProps, actionCreators)(ItemList)


