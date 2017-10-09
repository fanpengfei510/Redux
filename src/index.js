import React, { Component } from 'react';
import ReactDOM,{render} from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducer from './reducers'
import App from './components/App';

/**
|--------------------------------------------------
| @const 创建reducer，Dev Tools视图工具
|--------------------------------------------------
*/
let store = createStore(reducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)