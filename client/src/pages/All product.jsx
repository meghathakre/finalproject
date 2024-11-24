import theme1 from "../images/liptheme.avif"
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCard } from '../pages/cardSlice';
import { useNavigate } from 'react-router-dom';
import Container from "react-bootstrap/esm/Container";

const Allproduct=()=>{
const [mydata, setMydata]=useState([]);
const dispatch= useDispatch();
const navigate= useNavigate();

  const loadData=()=>{
    let api="http://localhost:8000/product/allproduct";
    axios.get(api).then((res)=>{
      setMydata(res.data);
      console.log(res.data);
      
    })
  }
  useEffect(()=>{
    loadData();
  }, []);


  const addcardData=(id, name, desc, categ, price, image)=>{
         dispatch(addToCard({id:id, name:name, description:desc, category:categ, price:price, image:image, qnty:1}))
  }

  
  const ans=mydata.map((key)=>{
    return(
      <>
     


        <Card style={{ width: '18rem', marginTop:'20px' }}>

     <a href='#' onClick={()=>{navigate(`/prodetail/${key._id}`)}}>
      <Card.Img variant="top" src={key.image} style={{height:'300px'}} />
      </a>
      <Card.Body>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          {key.description}
          <br/>
          For- {key.category}
          <br/>
         <span style={{color:'red', fontWeight:'bold'}}> Price : {key.price} </span> 
        </Card.Text>
        <Button variant="primary"
         onClick={()=>{addcardData(key._id, key.name, key.description, key.category, key.price, key.image)}}
        >Add to Cart</Button>
      </Card.Body>
    </Card>
      
      </>
    )
  })


    return(
        <>
           
           <Container>
        <div className="theme">
         <a href="#"><img src={theme1} width="100px" height="100px" borderRedius="50%"/></a>
          <h3 >Lipstick</h3>
          <a href="#"><img src={theme1} width="100px" height="100px" borderRedius="50%"/></a>
          <h3>Lipstick</h3>
          <a href="#"><img src={theme1} width="100px" height="100px" borderRedius="50%"/></a>
          <h3>Lipstick</h3>
          <a href="#"><img src={theme1} width="100px" height="100px" borderRedius="50%"/></a>
          <h3>Lipstick</h3>
          <a href="#"><img src={theme1} width="100px" height="100px" borderRedius="50%"/></a>
          <h3>Lipstick</h3>

        </div>
        </Container>
          


          <h1 align="center"> Our Trending Collections</h1>
        <div id="carddata">
        {ans}
        </div>
        
        </>
    )
}

export default Allproduct;