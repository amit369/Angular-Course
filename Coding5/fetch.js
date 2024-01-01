
const fetchData = async () => {
    let data = await fetch('https://dummyjson.com/cart', {
            headers : { 
                'Content-type' : 'application/json'
            },
            method : 'GET'
    })
    let response = await data.json();
    console.log(response);
}
fetchData();