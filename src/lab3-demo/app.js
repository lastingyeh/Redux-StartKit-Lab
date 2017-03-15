// @flow

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';

import * as actionCreators from './action'

type Item = {
  id:number,
  text:string,
  isEditing:boolean,
}

class MyComponent extends Component {

  state: { inputValue:string }

  constructor(props) {
    super(props)

    this.state = {
      inputValue: '',
    }
  }

  // bind to event "onChange" from input to change state of inputValue
  handleTextChange = (event: KeyboardEvent) => {

    if (event.target instanceof HTMLInputElement) {
      this.setState({
        inputValue: event.target.value,
      })
    }
  }

  // bind to Event "onClick" from button to ItemAdd
  handleItemAdd = () => {

    const { onItemAdd } = this.props

    onItemAdd({
        id: +new Date(),
        text: this.state.inputValue,
        isEditing: false,
      }
    )

    this.setState({
      inputValue: '',
    })
  }

  // bind to Event "onKeyPress" from li-input when end-edit
  handleItemUpdated = (event: KeyboardEvent, item: Item) => {

    const { onItemEdit } = this.props

    if (event.key === 'Enter'
      && event.target instanceof HTMLInputElement) {

      let itemText = event.target.value.trim()

      onItemEdit({ ...item, text: itemText, isEditing: false })
    }
  }

  // bind to Event "onDoubleClick" from li-input-checkbox when start-edit
  handleItemUpdating = (item: Item) => {

    const { onItemEdit } = this.props

    onItemEdit({
      ...item,
      isEditing: true,
    })

  }

  render() {

    const { items, onItemDel } = this.props

    return (
      <div>
        <div>
          <input type="text"
                 value={this.state.inputValue}
                 onChange={this.handleTextChange}
          />
          <button onClick={this.handleItemAdd}>
            Add Item
          </button>
        </div>
        <p>
          {
            items.map((item, index) => (
                <li key={item.id}
                    onDoubleClick={()=>this.handleItemUpdating(item)}>
                  {
                    (item.isEditing) ?
                      <input type="text"
                             defaultValue={item.text}
                             onKeyPress={(e)=>this.handleItemUpdated(e,item)} />
                      :
                      <input type="checkbox"
                             id={item.id}
                             onClick={()=>onItemDel(item.id)} />
                  }
                  {
                    (item.isEditing) ? '' : item.text
                  }
                </li>
              )
            )
          }
        </p>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  items: state.items
})

// use three write-patterns
// 1.
// const mapDispatchToProps = (dispatch) => ({
//     onItemAdd: (id: number, text: string) => dispatch(actionCreators.onItemAdd(id, text)),
//     onItemDel: (id: number) => dispatch(actionCreators.onItemDel(id)),
//   }
// )

// 2.
//const mapDispatchToProps = actionCreators

// 3.
const mapDispatchToProps = (dispatch) => bindActionCreators(actionCreators, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(MyComponent)