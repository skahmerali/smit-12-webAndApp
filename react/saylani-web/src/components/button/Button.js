import React from 'react'

export default function Button(props) {
    console.log(props.src)
    return (
        <button src={props.src}>
            {props.name}
        </button>

    )
}
