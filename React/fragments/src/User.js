function User(props)
{
    const data = "Anil Sidhuu";
    return(
        <div>
            <h1>User Component </h1>
            <button onClick={props.alert(data)}>Click Me</button>
        </div>
    )
}

export default User;