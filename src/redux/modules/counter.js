import 'rxjs'

export const incrementCounter = (action$) => {
    return action$
        .filter(action => action.type === 'INCREMENT')
        .map(() => ({ type: 'INCREMENT' }))
        .debounceTime(1000)
}

export const decrementCounter = (action$) => {
    return action$
        .filter(action => action.type === 'DECREMENT')
        .map(() => ({ type: 'DECREMENT' }))
        .debounceTime(1000)
}

export const delayCounter = (action$) => {
    return action$
            .filter(action => action.type === 'DELAY')
            .map((action) => ({ type: 'DELAY', payload: action.payload }))
            .do(e => console.log(e))
            .take(1)
}

export const counter = (state = { count: 0, delay: 0, }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { count: state.count + 1 })
    case 'DECREMENT':
      return Object.assign({}, state, { count: state.count - 1 })
    case 'DELAY':
        return Object.assign({}, state, { delay: action.payload })
    default:
      return state
  }
}

