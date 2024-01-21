const express = require('express');
const app = express();

app.get("/home", (req,res) => {
    res.send("Home");
})
app.listen(5000);