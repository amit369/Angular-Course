const callApi = async () => {
    let result = await fetch('https://dummyjson.com/cart', {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json'
        }
    })

    let resultjson = await result.json();
    console.log(` Result json `, resultjson);
}

callApi();