import React, { useState } from 'react'
import { Link, useNavigate } from "react-router"

const Register = () => {
    const nav = useNavigate()
    const [form, Setform] = useState({
        username: "",
        email: "",
        password: ""
    })

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = fetch("http://localhost:3000/users/Register", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(form)
            })

            if (!res.ok) {
                console.log("internal server error")
            }
            if (res) {
                console.log(res)
                nav("/login")
            }

        }
        catch (err) {
            console.log(err)
        }
    }
    const handleOnChange = (e) => {
        Setform({
            ...form, [e.target.name]: e.target.value
        })

    }
    return (
        <div className='box'>
            <h3>register Your account</h3>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='username' name='username' onChange={handleOnChange} />
                <input type="email" placeholder='email' name='email' onChange={handleOnChange} />
                <input type="password" placeholder='password' name='password' onChange={handleOnChange} />
                <input className='submit' type="submit" value="register" />
            </form>
            <p>you alerady have an account
                <Link to="/login" >login</Link>
            </p>
        </div>
    )
}

export default Register