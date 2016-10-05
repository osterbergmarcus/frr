import 'rxjs'

export const increaseCounter = (action$) => {
    return action$
        .ofType('INCREMENT')
        .mapTo({ type: 'INCREMENT' })
        .debounceTime(1000)
        .do(e => console.log(e))
}

export const decreaseCounter = (action$) => {
    return action$
        .ofType('DECREMENT')
        .mapTo({ type: 'DECREMENT' })
        .debounceTime(1000)
        .do(e => console.log(e))
}

export const delayCounter = (action$) => {
    return action$
        .ofType('DELAY')
        .mapTo({ type: 'DELAY' })
        .do(e => console.log(e))
        .takeLast()
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

