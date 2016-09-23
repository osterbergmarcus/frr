import React from 'react'
import './App.css'
import Button from './components/Button'

function App(props) {
  return (
    <div className="app">
      <h1>{props.store}</h1>
      <Button
        text={'Increment'}
        action={props.increment} />
      <Button
        text={'Decrement'}
        action={props.decrement} />
    </div>
  )
}

React.propTypes = {
  decrement: React.PropTypes.function,
  increment: React.PropTypes.function,
  store: React.PropTypes.number,
}

export default App
