import React from 'react'

export default function Button(props) {
    console.log(props.obj.awesome)





    if (user) {
        return (<div>Hello user</div>)
    } else if (serviceManger) {
        return (<div>Hello service manager</div>)
    }
    return (
        <button src={props.src}>
            {props.name}
        </button>

    )
}
