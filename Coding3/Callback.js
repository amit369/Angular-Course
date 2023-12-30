const fs = require('fs');

fs.readFile('abc.txt', 'utf-8', (err,data) => {
     if(err)
     {
        console.log(data);
        return;
     }

     fs.readFileSync('abc2.txt','utf-8', (err,data) => {
        if(err)
        {
            console.log(err);
            return;
        }
     })
})