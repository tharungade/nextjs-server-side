"use client"

import axios from "axios";
import { useState } from "react";

export default function SignUpComponent()
{
    let [email, setEmail] = useState("");
    let [password, setPassword] = useState("");

    return (
        <div className="p-5 m-5 w-80 border ">
            <div>
                <label>email</label> <br />
                <input className="border" onChange={(event) => setEmail(event.target.value)}/> 
            </div>
            <br />
            <div>
                <label>password</label> <br />
                <input className="border" onChange ={(event) => setPassword(event.target.value)}/>
            </div>
            <button className="border p-1 m-4" onClick={() => handleSignUp(email, password)}>signup</button>
        </div>
    );
}

async function handleSignUp(email: string, password: string)
{
    try
    {
        const response = await axios.post("http://localhost:3000/api/user", JSON.stringify({"username": email, password}));
    }
    catch(e)
    {
        console.log(e);
    }
}