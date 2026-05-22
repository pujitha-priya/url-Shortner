const express= require("express");

const router= express.Router();
 const {generateNewShort} = require("../controllers/url");

router.post('/', generateNewShort);

module.exports= router;