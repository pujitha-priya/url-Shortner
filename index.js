const express= require("express");
const app= express();
const PORT = 8001;
const {connectToMongodb} = require("./connet");
const  userRouter= require('./routes/url');
const URL= require('./models/url');

connectToMongodb('mongodb://localhost:27017/short-url')
.then(()=>console.log('connected'));

app.use(express.json());
app.use("/url", userRouter);

app.listen(PORT,()=>{
    console.log (`server start at the port`);
})