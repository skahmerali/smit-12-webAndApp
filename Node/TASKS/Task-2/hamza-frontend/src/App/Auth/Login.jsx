import React, { useState } from 'react'
import { Link, useNavigate } from "react-router"


const Login = () => {
    const nav = useNavigate()
    const [form, Setform] = useState({
        email: "",
        password: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault()
        try {
            const res = fetch("http://localhost:3000/users/login", {
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
                localStorage.setItem("token", res.token)
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
            <h3>login Your Account</h3>
            <form onSubmit={handleSubmit}>
                <input type="email" placeholder='email' name='email' onChange={handleOnChange} />
                <input type="password" placeholder='password' name='password' onChange={handleOnChange} />
                <input className='submit' type="submit" value="login" />
            </form>
            <p>don't have register first
                <Link to="/Register" >Register</Link>
            </p>
        </div>
    )
}

export default Login