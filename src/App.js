import React from 'react'
import './App.css'
import Button from './components/Button'
import Delay from './components/Delay'
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
        <Delay action={(payload) => props.dispatch({ type: 'DELAY', payload })}>
          {props.delay}
        </Delay>
    </div>
  )
}

React.propTypes = {
  count: React.PropTypes.number,
  decrement: React.PropTypes.function,
  delay: React.PropTypes.number,
  increment: React.PropTypes.function,
}

export default connect(
  ({ count, delay }) => ({ count, delay })
)(App)
