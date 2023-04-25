import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function Form () {
    const data = {
        name:"",
        email:"",
        password:""
    }
    const [inputData, setInputData] = useState(data)
    const [flag, setFlag] = useState(false)
    useEffect(()=>{ 
// console.log("register")
    },[flag])
    function handelChange (e) {
        setInputData({...inputData,[e.target.name]:e.target.value})
        console.log(inputData);
    }
    function handelSubmit(e){
        e.preventDefault();
        if(!inputData.name || !inputData.email || !inputData.password){
            alert("All fields are Required!!!")
        }
        else{
            setFlag(true)
        }
    }
    return (
        <>
        <pre>{flag?<h2 className="ui-define">Hello {inputData.name}, You've Register Successfully</h2>:""}</pre>
        <form className="container" onSubmit={handelSubmit}>
            <div className="header">
                <h1>Registration Form</h1>
            </div>
            <div>
                <input 
                 type="text"
                 placeholder="Enter Your Name"
                 name="name"
                 value={inputData.name} 
                 onChange={handelChange}
                />
            </div>
            <div>
                <input 
                 type="email"
                 placeholder="Enter Your Email"
                 name="email"
                 value={inputData.email} 
                 onChange={handelChange}
                />
            </div>
            <div>
                <input 
                 type="password"
                 placeholder="Enter Your Password"
                 name="password"
                 value={inputData.password} 
                 onChange={handelChange}
                />
            </div>
            <div>
                <button type="submit">Submit</button>
            </div>
        </form>
        </>
    )
}
export default Form;