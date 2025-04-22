import React, {useState} from "react";
import DataContext from "./Context";


export default function DataProvider({ children }) {
    const [item, setItem] = useState()
    const data = {
        name: "sheikh ahmer ali",
        class: "Saylani mass it training Web and Mobile App"
    }
    return (
        <DataContext.Provider value={{ data: data , item, setItem}}>
            {children}
        </DataContext.Provider>
    )
}