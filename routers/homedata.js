const exhomedata = require("express");
const hdCon = require("../controllers/category");
const hmd = exhomedata.Router(); 
hmd.get("/homedata", hdCon.getDataFun);
module.exports = hmd;