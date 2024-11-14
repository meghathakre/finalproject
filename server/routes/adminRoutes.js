const express= require("express");
const route= express.Router();
const AdminController= require("../controllers/adminController");


route.post("/usersave", AdminController.adminDataCheck);


module.exports=route;