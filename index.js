
const express= require("express");
const path= require('path');
const app= express();
const PORT = 8001;
const {connectToMongodb} = require("./connet");
const  userRouter= require('./routes/url');
const staticRoute= require('./routes/StaticRouter');
const URL= require('./models/url');

app.set("view engine","ejs");

app.set('views',path.resolve("./views"));
connectToMongodb('mongodb://localhost:27017/short-url')
.then(()=>console.log('connected'));

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.get("/test", async (req,res)=>{
    const allURL= await URL.find({});
    return res.render('home',{
        urls:allURL,
    });
});
app.use("/url", userRouter);
app.use("/", staticRoute);
app.listen(PORT,()=>{
    console.log (`server start at the port`);
})