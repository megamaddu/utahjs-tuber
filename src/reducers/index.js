import { combineReducers } from 'redux'
import * as actions from '../actions'
import initialIssues from '../issues'

const issues = (state = initialIssues, action) => {
  return state
}

const selectedIssue = (state = 'utah-driver', action) => {
  switch (action.type) {
    case actions.PROBLEM_SELECTED:
      return action.selectedIssue
    default:
      return state
  }
}

// check out the redux dev tools to explore
// the state shape this creates :
export default combineReducers({
  issues,
  selectedIssue
})
