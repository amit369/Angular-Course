import React from 'react';

class User extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            email : 'anil@gmail.com'
        }
    }
    render()
    {
    
        console.warn("Render method", this.props);
        return(
            <div>
                <h1>User Component </h1>
                <button onClick={() => this.setState({ email : "sidhu@gmail.com"})}>Update Email</button>
            </div>
        )
    }
}

export default User;