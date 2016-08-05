import React from 'react'
import { connect } from 'react-redux'
import * as actions from './actions'
// import './HelpForm.css'

const HelpForm = ({issues, selectedIssue, problemSelected}) => (
  <form>
    <label htmlFor="issue">What's the problem?</label>
    <select name="issue" onChange={(event) => {
      problemSelected(event.target.value)
    }} value={selectedIssue}>
      {Object.keys(issues).map((key) => (
        <option key={key} value={key}>{issues[key]}</option>
      ))}
    </select>
  </form>
)

const mapStateToProps = ({issues, selectedIssue}) => ({
  issues,
  selectedIssue
})

const mapDispatchToProps = {
  problemSelected: (selectedIssue) => ({
    type: actions.PROBLEM_SELECTED,
    selectedIssue
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(HelpForm)
