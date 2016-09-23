import React from 'react'

function Button(props) {
    return (
        <button onClick={props.action}>{props.text}</button>
    )
}

React.propTypes = {
    action: React.PropTypes.function,
    text: React.PropTypes.string
}

export default Button
