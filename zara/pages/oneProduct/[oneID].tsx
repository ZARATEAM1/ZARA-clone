import { GetStaticPaths, GetStaticProps } from 'next';
import Button from "react-bootstrap/Button";
import Navbar from '../navbar';
import { useEffect, useState } from 'react';



export const getStaticPaths: GetStaticPaths = async () => {
    
    const res = await fetch('http://localhost:3002/api/get');
    const data = await res.json();
    const paths = data.map((product: { id: number }) => {
        return {
            params: { oneID: product.id.toString() }
        };
    });
    return {
        paths,
        fallback: false
    };
};

export const getStaticProps: GetStaticProps = async (context) => {
    const oneID = context.params?.oneID;
    const res = await fetch(`http://localhost:3002/api/getone/${oneID}`);
    const data = await res.json();
    
    return {
        props: { product: data }
    };
};


interface Product {
    id: number;
    name: string;
    category: string;
    img: string;
    size: string;
    description: string;
    color: string;
    gender: string;
    price: number;
}

const Details: React.FC<{ product: Product }> = ({ product }) => {
    const [vd, setVd] = useState('');
    console.log(product.id)

    useEffect(() => {
      const handle = () => {
        if (product.id ==19) {
          setVd('/videos/vd4.mp4');
        }
        if (product.id ==18) {
            setVd('/videos/vd3.mp4');
          }
        //   if (product.id ==89) {
        //     setVd('/videos/vd9.mp4');
        //   }
          if (product.id ==20) {
            setVd('/videos/vd7.mp4');
          }
          if (product.id ==199) {
            setVd('/videos/vd6.mp4');
          }}
          handle(); 
        }, [])
    return (
       <>
       <Navbar/>
       <style jsx>
            {
              `
              * {
              margin: 0;
              padding: 0;
              font-family: "Karla", sans-serif;
            }
            #container {
              width: 85%;
              /* border: 1px solid red; */
              display: flex;
              margin: auto;
              justify-content: space-between;
            }
            
            /* left side content div  */
            .left_side_content {
              width: 18%;
              /* border: 1px solid blue; */
              height: 80%;
              margin-top: 15%;
            }
            .left_side_content > :nth-child(2) {
              margin-top: 1.5em;
              font-weight: 400;
            }
            .left_side_content > p {
              font-size: 0.7em;
              line-height: 1.5em;
              margin-top: 1.5em;
            }
            .left_side_content > :nth-child(5) {
              text-decoration: underline;
              cursor: pointer;
            }
            
            /* middle image divv  */
            .image_div {
              width: 28%;
              /* border: 1px solid green; */
            }
            .image_div > img {
              width: 100%;
            }
            
            /* right side product information div   */
            .product_info_rightSide {
              width: 22%;
              /* border: 1px solid teal; */
              padding-top: 1.5em;
            }
            .product_name {
              display: flex;
              justify-content: space-between;
              /* border: 1px solid red; */
            }
            .product_name > h2 {
              font-size: 1.2em;
              font-weight: bold;
            }
            .product_name > img {
              width: 5%;
              height: 1em;
              margin-top: 0.2em;
            }
            .product_info_rightSide > p {
              font-size: 0.8em;
            }
            .product_info_rightSide > :nth-child(2) {
              line-height: 1.4em;
              margin-top: 1.5em;
              margin-bottom: 4em;
            }
            .product_info_rightSide > :nth-child(4) {
              /* border: 1px solid red; */
              padding-top: 1em;
              padding-bottom: 2em;
            }
            .sizes {
              line-height: 2em;
              border-bottom: 1px solid black;
              border-top: 1px solid black;
              font-size: 0.8em;
              margin-bottom: 0.7em;
            }
            .sizes > p:hover {
              background-color: #e7e6e6f5;
              cursor: pointer;
            }
            .sizeScale {
              font-size: 0.9em;
              display: flex;
              justify-content: space-between;
            }
            .sizeScale > p:hover {
              cursor: pointer;
            }
            button {
              margin: 0.8em 0em;
              height: 7%;
              width: 100%;
              border: none;
              background-color: black;
              color: white;
              font-weight: bold;
              cursor: pointer;
            }
            .product_info_rightSide > :last-child {
              margin-top: 0.8em;
            }
            
            .popup{
            position: absolute;
            right:0;
            top:0;
            width: 30%;
            background-color: white;
            height:100vh;
            overflow: scroll;
            padding:.5em;
            
            
            }
            
            .popup img{
              width:50%;
            }
            
            .popup button{
              padding:1em;
              position: sticky;
              bottom:0;
            }
            
            #popupmain>div{
              margin-bottom:10%;
            }
            
            
            
            .popup .X{
              position: absolute;
              top:0;
              right:0;
            }
            
            .none{
              display: none;
            }
            
            .flex{
              display: flex;
            }
            
            @media only screen and (min-width: 375px) and (max-width: 768px) {
              .prev,
              .next,
              .text {
                font-size: 11px;
              }
            
              .image_div > img {
                width: 130%;
                margin-top: 49%;
                margin-left: -20%;
            }
            
            
            }
            
            @media only screen and (min-width: 0px) and (max-width: 390px) {
              #bookVdo {
                transform: rotateZ(90deg);
                width: 750px;
                height: 700px;
              }
              .slideshow-container {
                width: 80%;
                /* position: relative; */
                margin-top: 10%;
                font-size: 20px;
                height: 700px;
                margin-left: 25%;
                margin-bottom: 15%;
              }
              .rightoptions p,
              #search-input {
                font-size: 8px;
              }
              #footer a {
                font-size: 13px;
              }
            
              .logo img {
                padding: 2px 0px 0px;
                display: inline;
                margin-left: 30%;
                /* top: 26px; */
                margin-top: -71px;
                width: 40%;
              }
            
              body{
                line-height:1.5em;
              }
            
              .popup{
              width: 50%;
            }
            
            
            
            
              .product_info_rightSide {
              width: 100%;
             
            }
            
            .left_side_content {
              width: 100%;
              
            }
            
            .image_div {
              width: 100%;
              /* border: 1px solid green; */
            }
            
            #container{
              flex-direction: column
            }
            }`
            }
  
          </style>
          <style jsx>
        {`
        .background-video-container {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            z-index: -1;
          }
          
          .background-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            object-fit: cover;
          }
          `}
    </style>
    <div className="background-video-container">
      { vd&& (<video className="background-video" autoPlay loop muted>
      <source src={vd} type="video/mp4" />
      </video>)}
    </div>
          
        <div id="header"></div>
        <div id="container">
          <div className="left_side_content">
            <h4>ZARA MESSY WEEK</h4>
            <h3>PRODUCT MANAGER</h3>
            <p>
              We work with the boys programmes to ensure compliance with safety,
              health and quality standards for our products.
            </p>
            <p>
              The Greenfeild to Wear 2.0 standard aims to minimise the environmental
              impact of textile manufacturing. To that end, we have developed
              Inditex’s The List programme, which helps guarantee both that
              production processes are
            </p>
            <p onClick={()=>window.location.href='/All'}>View more</p>
          </div>
          <div className="image_div">
            <img src={product.img} alt="" />
          </div>
          <div className="product_info_rightSide">
            <div className="product_name">
              <h2>{product.name}</h2>
              <img src={product.img} alt="" />
            </div>
            <p>{product.description}</p>
            <p>${product.price}</p>
            <p>INCLUDES TVA</p>
            <hr />
            <div className="sizes">
              <p>{product.size}</p>
            </div>
  
            <div className="sizeScale">
              <p>FIND YOUR SIZE</p>
              <p>SIZE GUIDE</p>
            </div>
            <button onClick={() => window.location.href = `../cart/${product.id}`}>add to cart</button>

            <p>CHECK IN-STORE AVAILABILITY</p>
            <p>DELIVERY, EXCHANGES AND RETURNS</p>
          </div>
        </div>
        <div id="footer"></div>
  
        <div id="popup" className="popup none">
          <h1>CART</h1>
          <h1 className="X" >X</h1>
          <div id="popupmain">
            <div className="flex">
              <img src={product.img} alt="" />
              <div>{product.name}</div>
              <div>{product.price}</div>
            </div>
          </div>
  
         
          <button onClick={() => window.location.href = `/cart/${product.id}`}>ADD TO BAG</button>

         
          
        </div>
     </>
    );
};

export default Details;
