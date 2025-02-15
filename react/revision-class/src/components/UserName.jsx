import React from "react";
import { useParams } from "react-router-dom";

export default function UserName() {
    const params = useParams();
    return (
        <>
            my name is {params.userName}
        </>
    )
}