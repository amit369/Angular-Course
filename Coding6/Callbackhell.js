const fs = require('fs');

fs.readFile('abc.txt', 'utf-8', (err,data) => {
     fs.readFile('abc2.txt', 'utf-8', (err,data) => {
        console.log(data);
     })
})