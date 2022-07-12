const navContent = require("express"); 
const catCon = require("../controllers/category");  
const navCon = navContent.Router(); 

navCon.route("/category").get(catCon.getDataFun);

module.exports = navCon;