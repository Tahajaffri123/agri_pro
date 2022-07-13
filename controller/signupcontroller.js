const routes=require("express").Router();
const mongodb = require("mongodb")
const signup=require("../model/Signup")


routes.get("/",(req,res)=>{
    let pagedata={pagename:"form/form"}
    res.render("layout",pagedata)
})
routes.post("/formData",(req,res)=>{
    signup.add(req.body,(err)=>{
        res.redirect("/form/view")
    })
})
routes.get("/view",(req,res)=>{
    let pagedata={pagename:"form/view"}
    res.render("layout",pagedata)
})
// res.render("layout",pagedata)
// let pagedata={pagename:"form/form"}

module.exports=routes;