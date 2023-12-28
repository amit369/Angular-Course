const fs = require('fs');

fs.readFile('abc.txt','utf-8', (err,data) => {
    if(err)
    {
        console.log(err);
    }
    fs.readFile('abc2.txt','utf-8', (err,data) => {
        if(err)
        {
            console.log(err);
        }

        fs.readFile('abc3.txt','utf-8', (err,data) => {
            if(err)
            {
                console.log(err);
            }
        })
    })
})