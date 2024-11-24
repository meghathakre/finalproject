const express=require("express");
const route=express.Router();
const ProductController=require("../controllers/productController");

route.post("/productsave",ProductController.productSave);
route.post("/allproductsave",ProductController.allproductSave);
route.get("/showproduct",ProductController.showProduct);
route.get("/allproduct",ProductController.showallProduct);
route.post("/productdetail",ProductController.productDetail);

module.exports=route;