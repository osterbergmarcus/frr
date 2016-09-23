import React from 'react'
import './App.css'
import Button from './components/Button'
import { connect } from 'react-redux'

function App(props) {
  return (
    <div className="app">
      <h1>{props.count}</h1>
      <Button action={() => props.dispatch({ type: 'INCREMENT' })}>
        <p>Increment</p>
      </Button>
      <Button action={() => props.dispatch({ type: 'DECREMENT' })}>
        <p>Decrement</p>
      </Button>
    </div>
  )
}

React.propTypes = {
  decrement: React.PropTypes.function,
  increment: React.PropTypes.function,
  count: React.PropTypes.number,
}

export default connect(
  ({ count }) => ({ count })
)(App)
