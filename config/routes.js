const routes =require("express").Router();
const homeCtrl=require("../controller/homecontroller");
const signupCtrl=require("../controller/signupcontroller");


routes.use("/",homeCtrl);
routes.use("/form",signupCtrl);


module.exports = routes;
