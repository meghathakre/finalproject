import theme1 from "../images/liptheme.avif";
import theme2 from "../images/facetheme.avif";
import theme3 from "../images/eyetheme.avif";
import theme4 from "../images/fragrancetheme.avif";
import theme5 from "../images/nailstheme.avif";
import { useState, useEffect } from 'react';
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useDispatch } from 'react-redux';
import { addToCard } from '../pages/cardSlice';
import { useNavigate } from 'react-router-dom';
import Container from "react-bootstrap/esm/Container";
import { IoIosStar } from "react-icons/io";
const Allproduct=()=>{
const [mydata, setMydata]=useState([]);
const dispatch= useDispatch();
const navigate= useNavigate();

  const loadData=()=>{
    let api3="http://localhost:8000/product/showproduct";
    axios.get(api3).then((res)=>{
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
      <Card.Img variant="top" src={key.image} style={{height:'270px'}} />
      </a>
      
      <div className="star" backgroundColor="pink">
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStar />
      <IoIosStar /> 
      <div > 
      5.0 rating
      </div>
      </div>
      <Card.Body style={{backgroundColor:"pink"}}>
        <Card.Title>{key.name}</Card.Title>
        <Card.Text>
          {key.description}
          <br/>
          For- {key.category}
          <br/>
         <span style={{color:'purple', fontWeight:'bold'}}> Price : {key.price} </span> 
        </Card.Text>
        <Button style={{backgroundColor:"black",width:"250px"}}
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
         <a href="lips"><img src={theme1} width="120px" height="120px" borderRedius="50%"/></a>
          <h3 >Lipstick</h3>
          <a href="face"><img src={theme2} width="120px" height="120px" borderRedius="50%"/></a>
          <h3>Face</h3>
          <a href="eyes"><img src={theme3} width="120px" height="120px" borderRedius="50%"/></a>
          <h3>Eyes</h3>
          <a href="fragrance"><img src={theme4} width="120px" height="120px" borderRedius="50%"/></a>
          <h3>Fragrance</h3>
          <a href="nails"><img src={theme5} width="120px" height="120px" borderRedius="50%"/></a>
          <h3>Nailpents</h3>

        </div>
        </Container>
          

<div className="newpro">
          <h2 align="center"  > Beautify your Self</h2>
          </div>
        <div id="carddata">
        {ans}
        </div>
        
        </>
    )
}

export default Allproduct;