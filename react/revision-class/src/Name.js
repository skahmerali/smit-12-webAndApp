import React from "react";

const UserName = ({ visible ,userGettingName }) => {
    return (
        <>
        My name is : 
            {visible && userGettingName }
        </>
    )
}

export { UserName };