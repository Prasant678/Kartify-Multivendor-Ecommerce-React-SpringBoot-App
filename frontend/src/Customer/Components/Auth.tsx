// import React from 'react'

import { useState } from "react"
import Login from "../Screens/Login";
import Signup from "../Screens/Signup";
import { Button } from "@mui/material";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="flex justify-center h-[85vh] items-center">
            <div className="max-w-md rounded-md shadow-lg p-8 bg-[#242424]">
                {isLogin ? <Login /> : <Signup />}
                <div className="flex justify-center items-center gap-1 mt-5">
                    <div><p>{isLogin ? "Create an Account" : "Already have an Account?"}</p></div>
                    <div><Button size="small" onClick={() => setIsLogin(!isLogin)}>{isLogin ? <p>Signup</p> : <p>Login</p>}</Button></div>
                </div>
            </div>
        </div>
    )
}

export default Auth
