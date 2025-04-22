import React, { useContext } from "react";
import { useParams } from "react-router-dom";
import DataContext from "../Context/Context";
// import DataProvider from "../Context/DataContext";


export default function UserName() {
    const params = useParams();
    const data = useContext(DataContext);
    console.log(data.data.name, '<==== data');
    return (
        <>
            my name is {params.userName}
        </>
    )
}

// https://www.freecodecamp.org/news/context-api-in-react/