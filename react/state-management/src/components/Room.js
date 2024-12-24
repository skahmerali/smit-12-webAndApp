import React, { useState } from 'react';

export default function Room() {
    const [isLit, setLit] = useState(true);
    // setLit()
    // const isLit= true
    // const setIsLit= false


    return (
        <div className="room">
            the room is {isLit ? "lit" : "dark"}
            <br />
            <button onClick={() => setLit(!isLit)}>
                flip
            </button>
        </div>
    )
}


