import React, {useContext} from "react";
import DataContext from "../Context/Context";

export default function Home() {
const data = useContext(DataContext)
    return (<>
        Hello Home {data.data.class}
    </>)
}