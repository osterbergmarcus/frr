import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import store from './redux/store'

const render = () => {
    ReactDOM.render(
        <App
            store={store.getState()}
            increment={()=> store.dispatch({type: 'INCREMENT'})}
            decrement={()=> store.dispatch({type: 'DECREMENT'})}/>,
        document.getElementById('root')
    )
}

store.subscribe(render)
render()
