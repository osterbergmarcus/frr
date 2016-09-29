import React from 'react'

function Button(props) {
    return (
        <button onClick={props.action}>{props.children}</button>
    )
}

React.propTypes = {
    action: React.PropTypes.function,
    children: React.PropTypes.node,
}

export default Button
