import Carousel from 'react-bootstrap/Carousel';
import ban1 from "../images/bannercos.webp";
import ban2 from "../images/bannercos2.gif";
import ban3 from "../images/banner3.webp";
import axios from 'axios';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import {useDispatch} from 'react-redux';
import { addToCard } from '../pages/cardSlice';
import { useEffect, useState } from 'react';
import video from "../images/quin.mp4";
import video2 from "../images/quin2.mp4";
import video3 from "../images/quin3.mp4";
import video4 from "../images/quin4.mp4";

import { useNavigate } from 'react-router-dom';
import { IoIosStar } from "react-icons/io";

const Home=()=>{
  const [mydata ,setMydata]=useState([]);
  const dispatch=useDispatch();
  const navigate= useNavigate();
  const loadData=()=>{
    let api="http://localhost:8000/product/showproduct";
    axios.get(api).then((res)=>{
      setMydata(res.data);
      console.log(res.data);
    })
  }
  useEffect(()=>{
    loadData();
  },[]);

  const addcardData=(id,name,desc,categ,price,image)=>{
    dispatch(addToCard({id:id,name:name,description:desc,category:categ,price:price,image:image,qnty:1}))
  }


  const ans=mydata.map((key)=>{
    return(
      <>
      
      <Card style={{ width: '18rem', marginTop:'20px',}}>
        <a href="#" onClick={()=>{navigate(`/prodetail/${key._id}`)}}>
      <Card.Img variant="top" src={key.image} style={{height:'270px'}} />
      </a>
      <div className="star">
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
        <Button style={{backgroundColor:"black",width:"250px" }}
         onClick={()=>{addcardData(key._id, key.name, key.description, key.category, key.price, key.image)}}
        >Add to Cart</Button>
      </Card.Body>
    </Card>
  
      </>
    )
  })
    return(
        <>
        
           <Carousel>
      <Carousel.Item>
          <img src={ban1} width="100%" height="500" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban2} width="100%" height="500" />
        <Carousel.Caption>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
      <img src={ban3} width="100%" height="500" />
        <Carousel.Caption>
       
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
         <br />

    <h1 align="center"> Trendy collection</h1>
    <div id="carddata">
        {ans}
        </div>
        <div className='video'>
    <video controls="autoplay" loop="muted" id="myvideo" width="300px" height="400px" borderRedius="250%"> <source src={video} alt="video/mp4" /> </video>
    <video controls="autoplay" loop="muted" id="myvideo" width="300px" height="400px" borderRedius="250%"> <source src={video2} alt="video/mp4" /> </video>
    <video controls="autoplay" loop="muted" id="myvideo" width="300px" height="400px" borderRedius="250%"> <source src={video3} alt="video/mp4" /> </video>
    <video controls="autoplay" loop="muted" id="myvideo" width="300px" height="400px" borderRedius="250%"> <source src={video4} alt="video/mp4" />
    </video>
    </div>
        </>
    )
}

export default Home;