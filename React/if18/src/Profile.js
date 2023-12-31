import  {useState} from 'react';
function Profile()
{
    const [loggedIn , setLoggedIn] = useState(false);
   
        return(
            <div>
              {loggedIn ?  <h1>Welcome Anil</h1> : <h1>Welcome Guest</h1>}
            </div>
        )
    
   
   
}

export default Profile;
