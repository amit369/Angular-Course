import React, { useState} from 'react';

function Login()
{ 
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [userErr, setUserErr] = useState("");
    const [passErr, setPassErr] = useState("");
    function loginHandle(e)
    {
        e.preventDefault();
        if(user.length < 3 || password.length < 3)
        {
                alert("type correct value");
        }
        else {
                alert("all good");
        }
        
    }
    function userHandler(e)
    {
        let item = e.target.value;
        if(item.length < 3)
        {
            setUserErr(true);
        }
        else {
            setUserErr(false);
        }
          setUser(e.target.value.length);
    }
    function passwordHandler(e)
    {
        let item = e.target.value;
        if(item.length < 3)
        {
            setPassErr(true)
        }
        else {
            setPassErr(false);
        }
          setPassword(e.target.value.length);
    }
    return(
        <div>
            <h1>Login</h1>
            <form onSubmit={loginHandle}>
            <input type="text" placeholder='Enter User Id' onChange={userHandler}/>
            {userErr ? <span>User Not valid </span> : ""}
            <br></br><br></br>
            <input type="text" placeholder='Enter User Paasword' onChange={passwordHandler}/>
            {passErr ? <span>Password not valid </span> : ""}
            <br></br>
            <br></br>
            <button type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;