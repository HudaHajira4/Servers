import express from "express";
// Instantiate Express
const app = express();
// Allot Port Number
const port = 5050;
// Check if the body is coming in valid JSON Format
app.use(express.json());
// Get Method
app.get("/",(req,res) => {
    console.log("I am in Express Server");
    // Send Responset to the server
    res.send("Hi From Express Server GET METHOD");
    // Note you cannot have more than 1 Res.send
})
// Post Method
// app.post("/home/:id", (req,res) =>{
//     console.log(req.headers);
//     console.log(req.query);
//     console.log(req.params);
//     console.log(req.method);
//     console.log(req.url);
//     console.log(req.body);
//     res.send("I am coming from POST Method");
// })
app.post("/huda", (req,res) =>{
    console.log(req.headers);
    console.log(req.query);
    console.log(req.params);
    console.log(req.method);
    console.log(req.url);
    console.log(req.body);
    res.send("I am coming from POST Method from huda");
})
// use - Works on all HTTP Req Methods
app.use("/",(req,res) => {
    console.log(req.method);
    res.send("Welcome to Express");
})
// Listen to the Request
app.listen(port,() => {
    console.log("Server Started at Port",port);
})