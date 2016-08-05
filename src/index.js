import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import issues from './issues'
import * as actions from './actions'
import App from './App';
import './index.css';

const initialState = {
  issues,
  selectedIssue: 'utah-driver'
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.PROBLEM_SELECTED:
      return {...state, selectedIssue: action.selectedIssue}
  }
  return state
}

const store = createStore(reducer, window.devToolsExtension && window.devToolsExtension())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
