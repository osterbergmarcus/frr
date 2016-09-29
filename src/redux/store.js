import { createStore, applyMiddleware } from 'redux'
import { counter } from './modules/counter'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { incrementCounter, decrementCounter, delayCounter } from './modules/counter'

const rootEpic = combineEpics(incrementCounter, decrementCounter, delayCounter)

const store = createStore(counter, applyMiddleware(createEpicMiddleware(rootEpic)))

export default store
