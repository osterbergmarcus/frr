import 'rxjs'

export const incrementCounter = (action$) =>
    action$.take(1)
        .startWith(0)
        .filter(action => action.type === 'INCREMENT')
        .map(action => ({ type: 'INCREMENT'}))

export const decrementCounter = (action$) =>
    action$.take(0)
        .filter(action => action.type === 'DECREMENT')
        .map(action => ({ type: 'DECREMENT'}))

export const delayCounter = (action$) =>
    action$.take(0)


export const counter = (state = { count: 0, delay: false }, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return Object.assign({}, state, { count: state.count + 1})
    case 'DECREMENT':
      return Object.assign({}, state, { count: state.count - 1})
    case 'DELAY':
        return Object.assign({}, state, { delay: !state.delay })
    default:
      return state
  }
}

