import React from 'react';
import ReactDom from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

// reducer import
import itemApp from './reducer';

// components import
import MyComponent from './app'

const store = createStore(itemApp,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

// render ReactDom
const StartApp = () => ReactDom.render(
  <Provider store={store}>
    <MyComponent />
  </Provider>,
  document.getElementById('root')
)

export default StartApp