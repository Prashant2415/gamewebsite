import { useState } from "react"
import "../Components/Registration.css"
function Registration()
{
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [category,setCategory]=useState('')
    const [number,setNumber]=useState();
    
    //to store the username and password
    

    const handleRegister=(e)=>{
        e.preventDefault();
        // const u=[username,password]
        // users.push(u);
        // console.log("users",users);
        //  console.log("Username and password ",u)
        if(username === null || username === "undefined" || username==="")
    {
        alert("Username field is empty")
    }
    else if(password === null || password === "undefined" || password==="")
    {
        alert("Password filed is empty")
    }
    if(email === null || email === "undefined" || email==="")
    {
        alert("email field is empty")
    }
    else if(category === null || category === "undefined" || category==="")
    {
        alert("category filed is empty")
    }
    else{
        alert("Details added")
    }
    }
    return(
        <div className="card p al">
            <h1 className="font">Registration</h1>
            <form className="f">
            <label>Username:</label> <input type="text" placeholder="Enter username" value={username} onChange={(e)=>setUsername(e.target.value)}/><br/>
            <label>Password:</label> <input type="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)}/><br/>
            <label>Email:</label> <input type="email" placeholder="Enter email id" value={email} onChange={(e)=>setEmail(e.target.value)}/><br/>
            Category: <select value={category} onChange={(e)=>setCategory(e.target.value)}><br/>
                <option>Admin</option>
                <option>User</option>
            </select><br/>
            Phone Number: <input type="tel" maxLength="10" value={number} onChange={(e)=>setNumber(e.target.value)}/><br/>
            <button onClick={handleRegister}>Register</button>
            </form>
        </div>
    )
}
export default Registration