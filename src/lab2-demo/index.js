// @flow
import { createStore } from 'redux';

import React from 'react';
import ReactDOM from 'react-dom';

// REDUCER
function dealItem(state = [], action) {

  switch (action.type) {

    case 'ADD_ITEM':
      return [{
        id: action.payload.id,
        text: action.payload.text,
      }, ...state]

    case 'DEL_ITEM':
      return state.filter(item => item.id !== action.id)

    default:
      return state
  }
}

// STORE
const store = createStore(dealItem,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// Components
class MyComponent extends React.Component {

  state: { inputValue:?string }

  constructor(props) {
    super(props)

    this.state = { inputValue: '' }
  }

  handleChange = (event: KeyboardEvent) => {

    if (event.target instanceof HTMLInputElement) {
      this.setState({
        inputValue: event.target.value,
      })
    }
  }

  handleClick = () => {

    // Action 'ADD_ITEM'
    store.dispatch({
      type: 'ADD_ITEM',
      payload: {
        id: +new Date(),
        text: this.state.inputValue,
      },
    })

    this.setState({
      inputValue: '',
    })
  }

  render() {

    return (
      <div>
        <div>
          <input type="text"
                 value={this.state.inputValue}
                 onChange={this.handleChange}
          />
          <button onClick={this.handleClick}>Add Item</button>
        </div>
        <p>
          {
            store.getState().map(item => (
              <li key={item.id}>
                <input type="checkbox"
                       id={item.id}
                       onClick={()=>store.dispatch({type:'DEL_ITEM',id:item.id})}
                />
                {item.text}
              </li>
            ))
          }
        </p>
      </div>
    )
  }
}

// RENDER
const render = () => ReactDOM.render(
  <MyComponent />,
  document.getElementById('root')
)

// At first render
render()

// As store changed,then it call 'render()'
store.subscribe(render)