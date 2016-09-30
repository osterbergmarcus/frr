import React from 'react'

function Delay(props) {
    return (
        <div>
            <input type="range" className="test" min="0" max="100" onChange={(event) => props.action(event.target.value)} />
            <p>{`Delay: ${props.children}`}</p>
        </div>
    )
}

export default Delay
