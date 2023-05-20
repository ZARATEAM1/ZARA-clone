'use client'
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import axios from 'axios';

interface Product {
    id: number;
    name: string;
    category: string;
    img:string
    description:string;
    price:number;
    size:string;
  }
  
  const MyComponent: React.FC = () => {
  
    const [products, setProducts] = useState<Product[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api/get');
      setProducts(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );
  return (
    <div>
       
      <header>
        <div id="hambuger">
          <img
            src="https://icon-library.com/images/menu-icon-png-3-lines/menu-icon-png-3-lines-16.jpg"
            alt=""
            id="hamburgerIcon"
          />
        </div>
        <div id="logohead">
          <a href="./index.html">
            <img
              src="https://logodownload.org/wp-content/uploads/2014/05/zara-logo-1.png"
              alt=""
              id="zara_logo"
            />
          </a>
          <div id="ul">
            <ul>
             
              <a href="/help">
                <li className="log-help">HELP</li>
              </a>
              <a href="/cart">
                <li>CART</li>
              </a>
            </ul>
          </div>
        </div>
      </header>

      <div id="container">
        <div id="main">
          <input
            type="text"
            name=""
            value={searchTerm}
            onChange={handleSearch}
            id="searchbar"
            placeholder="ENTER SEARCH TERMS"
          />
             
          <div id="trending_product">
            {searchTerm &&  <p>Is this what you loocking for ?</p>}
          {searchTerm !== '' && filteredProducts.length > 0 ? (
  filteredProducts.map((product) => (
    <div className="product" key={product.id}>
      <div className="image_div">
        <img onClick={() => window.location.href = `oneProduct/${product.id}`} src={product.img} alt="" />
      </div>
      <div className="product_info_rightSide">
        <div className="product_name">
          <h2>{product.name}</h2>
          <img  src={product.img} alt="" />

        </div>
        <p>{product.description}</p>
        <p>${product.price}</p>
        <Link href={`oneProduct/${product.id}`}>{product.name}</Link>
        <p>INCLUDES TVA</p>
        <hr />
        <div className="sizes">
          <p>{product.size}</p>
        </div>
      </div>
    </div>
  ))
) : (
  <p>No products found.</p>
)}
      
            {/* <p>TRENDS</p>
            <p onClick={handleShirtsClick}>SHIRT MEN</p>
            <p onClick={handleShoesClick}>SHOES</p>
            <p onClick={handleWomenAccessoriesClick}>WOMEN ACCESSORIES</p>
            <p onClick={handleWomenJacketClick}>WOMEN JACKET</p> */}
          </div>
        </div>
        <div id="searchProd" className="grid"></div>
        <div id="shirt-products" className="none grid"></div>
        <div id="shoes-products" className="none grid"></div>
        <div id="womenAccessories-products" className="none grid"></div>
        <div id="women-jacket" className="none grid"></div>
        <div id="footer_section">
          <div id="about">
            
            
           
            
          </div>
         
        </div>
      </div>
      {/* //avoid this is just the styling cause i've strugled a lot to find a way. */}
      <style jsx>
            {`
           * {
            margin: 0;
            /* font-family: 'PT Sans', sans-serif; */
            font-family: "Karla", sans-serif;
            padding: 0;
          }
          header {
            display: flex;
            position: sticky;
            background-color: white;
            top: 0;
            z-index: 1;
          }
          
          /* top left side hamburger section  */
          #hambuger {
            width: 25%;
          
            /* border: 1px solid red; */
          }
          #hamburgerIcon {
            width: 15%;
            padding-top: 1.2em;
            padding-left: 1.5em;
            cursor: pointer;
          }
          
          /* right side logo head   */
          #logohead {
            /* border: 1px solid blue; */
            display: flex;
            padding-top: 0.8em;
          }
          
          #logohead>a{
              width:17.5%;
              
          }
          #zara_logo {
            width: 100%;
            height: 100%;
            cursor: pointer;
          
            /* border: 1px solid red; */
          }
          a{
              text-decoration: none;
              color: black;
          }
          
          ul {
            /* border: 2px solid green; */
            display: flex;
            list-style: none;
            position: absolute;
            right: 0;
            gap: 3.2em;
            padding-right: 4em;
            padding-top: 1em;
            font-size: 0.6em;
            font-weight: bolder;
          }
          li {
            cursor: pointer;
          }
          
          
          
          /* main container   */
          #main {
            width: 92.5%;
            /* border: 1px solid red; */
            margin-left: 7.5%;
          }
          
          
          /* search baar  */
          #searchbar {
            margin-top: 1.6em;
            width: 98%;
            outline: none;
            border: none;
            border-bottom: 2px solid black;
            padding: 0.2em 0em;
            font-size: 1.9em;
            font-weight: bold;
          }
          #searchbar::placeholder {
            color: black;
          }
          
          /* below search baar tranding products  */
          #trending_product {
            /* border: 1px solid red; */
            margin-top: 5em;
            /* line-height: 3.5em; */
            font-size: 0.68em;
            font-weight: bold;
          }
          #trending_product > :first-child {
            color: black;
            cursor: text;
            /* border: 1px solid red; */
            font-size: 1.5em;
          }
          
          #trending_product > p {
            cursor: pointer;
            color: #757575;
            margin-bottom: 2.1em;
          }
          
          
          
          .grid{
            display: grid;
          }
          .none{
            display: none;
          }
          #shirt-products {
            /* display: grid; */
            grid-template-columns: repeat(6, 1fr);
            grid-gap: 20px;
            padding: 0px 20px;
          }
          #shirt-products > div {
            margin-bottom: 2.8em;
          }
          #shirt-products > div > div {
            display: flex;
            justify-content: space-between;
            font-size: 0.75em;
          }
          #shirt-products > div > div >:nth-child(1):hover{
              text-decoration: underline;
              cursor: pointer;
          }
          
          #shirt-products > div > img {
            width: 100%;
          }
          
          /* shoes product   */
          #shoes-products{
            grid-template-columns: repeat(6, 1fr);
            grid-gap: 20px;
            padding: 0px 20px;
          }
          #shoes-products > div {
            margin-bottom: 2.8em;
          }
          #shoes-products > div > div {
            display: flex;
            justify-content: space-between;
            font-size: 0.75em;
          }
          #shoes-products > div > div >:nth-child(1):hover{
              text-decoration: underline;
              cursor: pointer;
          }
          
          #shoes-products > div > img {
            width: 100%;
          }
          
          /* womenAccessories-products */
          
          #womenAccessories-products{
            grid-template-columns: repeat(6, 1fr);
            grid-gap: 20px;
            padding: 0px 20px;
          }
          #womenAccessories-products > div {
            margin-bottom: 2.8em;
          }
          #womenAccessories-products > div > div {
            display: flex;
            justify-content: space-between;
            font-size: 0.75em;
          }
          #womenAccessories-products > div > div >:nth-child(1):hover{
              text-decoration: underline;
              cursor: pointer;
          }
          
          #womenAccessories-products > div > img {
            width: 100%;
          }
          
          /* women-jacket  */
          #women-jacket {
            grid-template-columns: repeat(6, 1fr);
            grid-gap: 20px;
            padding: 0px 20px;
          }
          #women-jacket  > div {
            margin-bottom: 2.8em;
          }
          #women-jacket  > div > div {
            display: flex;
            justify-content: space-between;
            font-size: 0.75em;
          }
          #women-jacket  > div > div >:nth-child(1):hover{
              text-decoration: underline;
              cursor: pointer;
          }
          
          #women-jacket > div > img {
            width: 100%;
          }
          
          /* footer section   */
          #about {
            display: flex;
            width: 92.5%;
            border-bottom: 1px solid rgb(212, 211, 211);
            padding-top: 50%;
            padding-bottom: 10%;
            /* border: 2px solid red; */
          
            /* margin-bottom: 50px; */
          }
          #about > :nth-child(3) {
            margin-left: 2.3em;
          }
          #about > :nth-child(4) {
            margin-left: 2.3em;
          }
          .about_info {
            margin-right: 1em;
          }
          .about_info > h4 {
            font-size: 1em;
            margin-bottom: 0.7em;
          }
          .about_info > p {
            cursor: pointer;
            font-size: 0.65em;
            font-weight: bold;
            margin-bottom: 0.4em;
          }
          .about_info > p:hover {
            text-decoration: underline;
          }
          
          
          #footer_section {
            /* border: 2px solid red; */
            margin-left: 7.5%;
          }
          footer {
            display: flex;
            justify-content: space-between;
            padding-top: 5.5em;
            padding-bottom: 8em;
            width: 92%;
            /* border: 2px solid red; */
          }
          
          #footer_left_box {
            /* border: 1px solid red; */
            font-size: 0.65em;
            font-weight: bold;
            width: 50%;
          }
          #footer_left_box > :nth-child(2) {
            margin-top: 15em;
          }
          #footer_right_box {
            /* border: 1px solid red; */
            font-size: 0.65em;
            font-weight: bold;
            width: 30%;
            text-align: right;
          }
          #footer_right_box > :nth-child(2) {
            margin-top: 2.2em;
            color: grey;
          }
          
          #searchProd {
            /* display: grid; */
            grid-template-columns: repeat(6, 1fr);
            grid-gap: 20px;
            padding: 0px 20px;
          }
          #searchProd > div {
            margin-bottom: 2.8em;
          }
          #searchProd > div > div {
            display: flex;
            justify-content: space-between;
            font-size: 0.75em;
          }
          #searchProd > div > div >:nth-child(1):hover{
              text-decoration: underline;
              cursor: pointer;
          }
          
          #searchProd > div > img {
            width: 100%;
          }
          
          
          
          
          /* media queries ---------------------------- */
          @media screen and (min-width: 360px) and (max-width: 741px) {
            /* #ul,
            .none {
              display: none;
            } */
            .log-help{
              display: none;
            }
          
            #hambuger {
              width: 10%;
          
              /* border: 1px solid red; */
            }
            #hamburgerIcon {
              width: 50%;
              padding-left: 10px;
              padding-top: 1em;
              cursor: pointer;
            }
            #logohead {
              width: 90%;
              /* border: 1px solid blue; */
              display: flex;
              padding-top: 0.8em;
            }
          
            #logohead>a{
              width: 35%;
          
            }
            #zara_logo {
              width: 100%;
              height: 75px;
              cursor: pointer;
          
              /* border: 1px solid red; */
            }
            #main {
              width: 90%;
              margin: auto;
              /* border: 1px solid red; */
            }
            #searchbar {
              margin-top: 1.6em;
              width: 100%;
              outline: none;
              border: none;
              border-bottom: 2px solid black;
              padding: 0.2em 0em;
              font-size: 1.9em;
              font-weight: bold;
              /* border: 1px solid red; */
            }
            .grid{
              display: grid;
            }
            .none{
              display: none;
            }
            #shirt-products {
              /* display: grid; */
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 20px;
              padding: 0px 20px;
            }
            #shoes-products{
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 20px;
              padding: 0px 20px;
            }
            #womenAccessories-products{
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 20px;
              padding: 0px 20px;
            }
            #women-jacket {
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 20px;
              padding: 0px 20px;
            }
            #about {
              display: flex;
              width: 90%;
              margin: auto;
              border-bottom: 1px solid rgb(212, 211, 211);
              padding-top: 50%;
              padding-bottom: 10%;
          
          }
          .about_info {
                display: none;
              margin-right: 1em;
            }
            footer {
              display: grid;
              grid-template-columns: repeat(1,1fr);
              justify-content: space-between;
              padding-top: 5.5em;
              padding-bottom: 8em;
              width:100%;
              /* border: 2px solid red; */
              text-align: center;
            }
            #footer_section {
              /* border: 2px solid red; */
              margin-left: 0%;
            }
            #footer_left_box {
              /* border: 1px solid red; */
              font-size: 0.65em;
              font-weight: bold;
              width: 100%;
            }
            #footer_right_box {
              /* border: 1px solid red; */
              font-size: 0.65em;
              font-weight: bold;
              width: 100%;
              text-align: center;
            }
            
          }
          
          @media screen and (min-width: 0px) and (max-width: 360px) {
              /* #ul,
              .none {
                display: none;
              } */
              .log-help{
                display: none;
              }
              #hambuger {
                width: 10%;
            
                /* border: 1px solid red; */
              }
              #hamburgerIcon {
                width: 50%;
                padding-left: 10px;
                padding-top: 1em;
                cursor: pointer;
              }
              #logohead {
                width: 90%;
                /* border: 1px solid blue; */
                display: flex;
                padding-top: 0.8em;
              }
          
              #logohead>a{
                width: 40%;
          
              }
              #zara_logo {
                width: 100%;
                height: 70px;
                cursor: pointer;
            
                /* border: 1px solid red; */
              }
              #main {
                width: 90%;
                margin: auto;
                /* border: 1px solid red; */
              }
              #searchbar {
                margin-top: 1.6em;
                width: 100%;
                outline: none;
                border: none;
                border-bottom: 2px solid black;
                padding: 0.2em 0em;
                font-size: 1.9em;
                font-weight: bold;
                /* border: 1px solid red; */
              }
              .grid{
                display: grid;
              }
              .none{
                display: none;
              }
              #shirt-products {
                /* display: grid; */
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 20px;
                padding: 0px 20px;
              }
              #shoes-products{
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 20px;
                padding: 0px 20px;
              }
              #womenAccessories-products{
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 20px;
                padding: 0px 20px;
              }
              #women-jacket {
                grid-template-columns: repeat(2, 1fr);
                grid-gap: 20px;
                padding: 0px 20px;
              }
              #about {
                display: flex;
                width: 90%;
                margin: auto;
                border-bottom: 1px solid rgb(212, 211, 211);
                padding-top: 50%;
                padding-bottom: 10%;
            
            }
            .about_info {
                  display: none;
                margin-right: 1em;
              }
              footer {
                display: grid;
                grid-template-columns: repeat(1,1fr);
                justify-content: space-between;
                padding-top: 5.5em;
                padding-bottom: 8em;
                width:100%;
                /* border: 2px solid red; */
                text-align: center;
              }
              #footer_section {
                /* border: 2px solid red; */
                margin-left: 0%;
              }
              #footer_left_box {
                /* border: 1px solid red; */
                font-size: 0.65em;
                font-weight: bold;
                width: 100%;
              }
              #footer_right_box {
                /* border: 1px solid red; */
                font-size: 0.65em;
                font-weight: bold;
                width: 100%;
                text-align: center;
              }

             
            }
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
            
                `}
        </style>
    </div>
  );
};

export default MyComponent;
