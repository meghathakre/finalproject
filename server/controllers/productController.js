
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


const showProduct=async(req, res)=>{

   const data= await productModel.find();
    res.send(data);
}


const productDetail=async(req,res)=>{
    const Data=await productModel.findById(req.body.id);
    res.send(Data);
}
const showallProductDetail=async(req, res)=>{
    const {category}= req.query;
    const Data= await productModel.find({category:category});
    res.send(Data)
}

module.exports={
    productSave,
   
    showProduct,

    productDetail,
    showallProductDetail
}