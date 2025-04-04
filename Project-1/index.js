const express = require("express");
// let users = require("./MOCK_DATA.json");

const {logReqRes} = require("./middlewares/index");
const {connectMongoDB} = require("./connection")
const userRouter = require("./routes/user");

const app = express();
const PORT = 8000;

// Connection
connectMongoDB('mongodb://127.0.0.1:27017/project-1')


// Middleware - Plugin
app.use(express.urlencoded({ extended: false }));
app.use(logReqRes("log.txt"))

// app.use((req, res, next) => {
//     console.log("Hello from middleware 1");
//     // return res.json({msg: "Hello from middleware 1"}) it end the req res cycle here!
//     next();
// }) 

// app.use((req, res, next) => {
//     console.log("Hello from middleware 2");
//     // db query
//     // credit card info
//     // req.creditCardNumber = "123";
//     // return res.json("Hey")
//     next();
// })


// Routes
app.use('/users', userRouter);


app.listen(PORT, () => {
    console.log("Server started at: ", PORT)
})