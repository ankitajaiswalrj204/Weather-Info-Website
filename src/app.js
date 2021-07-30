const express = require('express');
const path =require("path");
const hbs = require("hbs");
const app=express();

//static path
const static_path=path.join(__dirname,"../public");
app.use(express.static(static_path));

//tempate engine
const templatePath =path.join(__dirname,"../templates/views")
const partials_path= path.join(__dirname,"../templates/partials")

app.set('view engine','hbs');
app.set("views",templatePath);
hbs.registerPartials(partials_path);


//routing

app.get("/",(req ,res)=>{
    res.render('index.hbs')

})
app.get("/about",(req,res)=>{
    res.render('about.hbs')

})
app.get("/weather",(req,res)=>{
    res.render('weather')
})
app.get("*",(req,res)=>{
    res.render('error')

})
app.listen(850,()=>{
    console.log("listening to the port");
})