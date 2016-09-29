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
      <div>
        <input type="checkbox" onChange={() => props.dispatch({ type: 'DELAY' })} />
          {props.delay ? 'Delay On' : 'Delay Off'}
      </div>
    </div>
  )
}

React.propTypes = {
  count: React.PropTypes.number,
  decrement: React.PropTypes.function,
  delay: React.PropTypes.boolean,
  increment: React.PropTypes.function,
}

export default connect(
  ({ count, delay }) => ({ count, delay })
)(App)
