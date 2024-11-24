
const productModel = require("../models/productModel");



const productSave=async(req, res)=>{
 const {name, description, category, price, image}= req.body;
 
 const Product= await productModel.create({
    name:name,
    description:description, 
    category: category,
    price:price, 
    image: image
 })
 res.send(Product);
}
const allproductSave=async(req, res)=>{
    const {name, description, category, price, image}= req.body;
    
    const allProductsave= await productModel.create({
       name:name,
       description:description, 
       category: category,
       price:price, 
       image: image
    })
    res.send(allProductsave);
   }

const showProduct=async(req, res)=>{

   const data= await productModel.find();
    res.send(data);
}
const showallProduct=async(req,res)=>{
    const allproduct=await productModel.find();
    res.send(allproduct);
}

const productDetail=async(req,res)=>{
    const Data=await productModel.findById(req.body.id);
    res.send(Data);
}


module.exports={
    productSave,
    allproductSave,
    showProduct,
showallProduct,
    productDetail
}