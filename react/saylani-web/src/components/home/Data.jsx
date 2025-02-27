import React from "react";
import Button from "../button/Button";

// const DataUser = () => {

// }

export default function DataUser({ handleAlert }) {

    return (
        <>
            {/* <Button onClick={handleAlert} /> */}
            <Button onClick={handleAlert}>
                Click me
                {/* {{
                    userName: 'ahmer',
                    class: 'SMIT',
                    batch: '12'
                }} */}
            </Button>
        </>
    )
}