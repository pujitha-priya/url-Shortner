const shortid = require("shortid");

const URL= require('../models/url');



async function  generateNewShort(req,res){
   const shortID = shortid();
   const body= req.body;
   if(!body.url) return res.status(400).json({error: "url not found"})
    await URL.create({
        shortID : shortID,
        redirectURL: body.url,
        visitedHistory:[],
    });
    return  res.json({id: shortID});
}


module.exports={
    generateNewShort,
}