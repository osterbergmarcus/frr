import { createStore } from 'redux'
import counter from './modules/counter'

const store = createStore(counter)

export default store
