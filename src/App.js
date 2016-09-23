import React from 'react'
import './App.css'
import Button from './components/Button'

function App(props) {
  return (
    <div className="app">
      <h1>{props.store}</h1>
      <Button action={props.increment}>
        <p>Increment</p>
      </Button>
      <Button action={props.decrement}>
        <p>Decrement</p>
      </Button>
    </div>
  )
}

React.propTypes = {
  decrement: React.PropTypes.function,
  increment: React.PropTypes.function,
  store: React.PropTypes.number,
}

export default App
