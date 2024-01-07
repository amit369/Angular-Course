import React , {useState } from 'react';
import './register.css'

const Register = () => {

    const [ user, setUser] = useState({
        name : "",
        email : "",
        password : "",
        reEnterPassword : ""
    })

    const handleChange = e => {
        const { name, value} = e.target;
        setUser({
           ...user, 
           [name] : value
        })
    }
     return(
        <div className='register'>
            {
                console.log("user ", user)
            }
            <h1>Register</h1>
           
            <input type="text" placeholder='Enter name' name="name" value={user.name} onChange={handleChange}></input>
            <input type="text" placeholder='Enter email' name="email" value={user.email} onChange={handleChange}></input>
            <input type="password" placeholder='Enter password' name="password" value={user.password} onChange={handleChange}></input>
            <input type="password" placeholder='Re-enter password' name="reEnterPassword" value={user.reEnterPassword} onChange={handleChange}></input>
            <div className='button'>Register</div>
            <div>or</div>
            <div className='button'>Login</div>
        </div>
     )
} 

export default Register;