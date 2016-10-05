import { createStore, applyMiddleware } from 'redux'
import { counter } from './modules/counter'
import { createEpicMiddleware, combineEpics } from 'redux-observable'
import { increaseCounter, decreaseCounter, delayCounter } from './modules/counter'

const rootEpic = combineEpics(increaseCounter, decreaseCounter, delayCounter)

const store = createStore(counter, applyMiddleware(createEpicMiddleware(rootEpic)))

export default store
