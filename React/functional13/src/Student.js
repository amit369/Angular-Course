function Student(pro)
{
     
    console.log(pro.name);
    return(
        <div>
            <h1>Hello {pro.name} </h1>
            <h1>Email {pro.email} </h1>
            <h1>Other {pro.other.address} </h1>

        </div>
    )
}

export default Student;