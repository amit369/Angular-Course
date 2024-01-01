import React, { useEffect, useState } from 'react';

function User(props)
{
    useEffect(() => {
        alert('Count is ' + props.count);
    })

    return(<div className='App'>
                 <h1>Count Props : {props.count}</h1>
                 <h1> Data Props : {props.data} </h1>
    </div>)
}

export default User;