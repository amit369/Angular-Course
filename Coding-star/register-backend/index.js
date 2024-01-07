import express from 'express';
import cors from "cors";
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

const dbConnection = async () => {
await mongoose.connect("mongodb+srv://admin:admin@blog-app.i9nykqd.mongodb.net/?retryWrites=true&w=majority");
console.log("mongoose connected");
}

dbConnection();
const userSchema = new mongoose.Schema({
       name  : String,
       email : String,
       password : String
});

const User = new mongoose.model("User", userSchema);
app.post("/login", (req,res) => {
    res.send("My Api login");
})


app.post("/register", (req,res) => {
    res.send("My Api registered ");
})

app.listen(9002, () => {
    console.log("BE started at port 9002");
})