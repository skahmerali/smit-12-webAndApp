import React from 'react';
import Button from '@mui/material/Button';

export default function ButtonUses({ children }) {

    function handleAlert() {
        alert('Hello SMIT students');
    }
    // console.log(props.obj.awesome)





    // if (user) {
    //     return (<div>Hello user</div>)
    // } else if (serviceManger) {
    //     return (<div>Hello service manager</div>)
    // }
    return (
        <Button variant="outlined" onClick={handleAlert}>
            {children}
        </Button>

    )
}
