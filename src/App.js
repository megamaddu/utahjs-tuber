import React from 'react'
import { connect } from 'react-redux'
import './App.css'
import HelpForm from './HelpForm'

const App = ({issue}) => (
  <div className="App">
    <div className="App-header">
      <h2>TUber</h2>
      <h4>Uber for cars?</h4>
    </div>
    <p className="App-intro">
      To get started, tell us about your problem..
    </p>
    <p className="App-problem">
      You selected: {issue}
    </p>
    <HelpForm />
  </div>
)

const mapStateToProps = ({issues, selectedIssue}) => ({
  issue: issues[selectedIssue]
})

export default connect(mapStateToProps)(App)
