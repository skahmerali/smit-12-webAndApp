import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router"
import Home from '../App/Home'
import Register from '../App/Auth/Register'
import Login from '../App/Auth/Login'

const Rout = () => {
    return (
        <BrowserRouter >
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/Register' element={<Register />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Rout