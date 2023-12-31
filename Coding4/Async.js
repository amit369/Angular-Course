const doWork = async () => {
      let response = await fetch('https://dummyjson.com/cart', {
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json'
        }
      })
     let data = await response.json();
     console.log(data);
}
doWork();