const cookie = require("cookie-parser");
const express = require("express");
const app = express();
const router = require("./Router/Router");
require('./db/DataBase');
const hbs = require("hbs")
const port  = process.env.Port  || 5000;
const path = require("path");
const partials = path.join(__dirname,'./templates/partials');
const views = path.join(__dirname,'./templates/views');
const publicCssPath = path.join(__dirname,'../public/css');
const publicImgPath = path.join(__dirname,"../public/css/img");
const publicJsPath = path.join(__dirname,'../public/js');
// const indexPartials = path.join(__dirname,"./templates\partials\index")
app.use(cookie());  
app.use(express.json());
app.use(express.urlencoded({extended:false}))
app.use(router);
app.use(express.static(publicJsPath));    
app.use(express.static(publicCssPath));
app.use(express.static(publicImgPath)); 
app.set("view engine","hbs");
app.set("views",views);    
hbs.registerPartials(partials);  
// hbs.registerPartials(indexPartials);   
app.listen(port,()=>{
    console.log("portal is working with sucessfully ") 
});  