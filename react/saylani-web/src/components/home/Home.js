import React, {useState} from 'react';

// import Button from '../button/Button';

export default function Home() {
    const [data, setData] = useState("")
    // var userValue = prompt("Enter user name")

    function userChangeValue(event) {
        console.log(event.target.value);
        setData(event.target.value)
        // var userValue = document.getElementById('userVale').value;
    }
    return (
        <div>
            hello {data}
            {/* hello {userValue} */}
            <br />
            <input
                // id='userVale'
                // value=''
                onChange={userChangeValue}
            />
            <button onClick={userChangeValue}>
                click please
            </button>
            {/* Hello saylani
            <Button
                src="Ali"
                name="click me"
                obj={{ awesome: "yes", disabled: "no" }}
            /> */}

        </div>
    )
}
