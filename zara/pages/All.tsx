import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './navbar';

interface Product {
  id: number;
  gender: string;
  category: string;
  name: string;
  price: number;
  description: string;
  color: string;
  size: string;
  img: string;
}

const AllProducts: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [i,setI]=useState(1)
  
  const [img,setImg]=useState("https://img.icons8.com/?size=512&id=nfkSUPApKQlU&format=png")
  const handle=()=>{
    setI(i+1)
    if(i>2){
      setI(1)
     setImg('https://img.icons8.com/?size=512&id=nfkSUPApKQlU&format=png')
    }
    if(i>0){
      setImg('https://img.icons8.com/?size=512&id=nfkSUPApKQlU&format=png')
    }
    if(i==2){
      setImg('https://img.icons8.com/?size=512&id=53419&format=png')
    }
  }

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get('http://localhost:3002/api/get');
      const productsData: Product[] = response.data;
      setProducts(productsData);
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };

  return (
    <div>
     
      <style jsx>
{`
 * {
  margin: 0;
  padding: 0;
}

.grid {
  display: grid;
}

#main {
  grid-template-columns: repeat(4, 1fr);
  gap: 1em;
  
  width: 90%;
  margin: 10% auto;
}

#main img {
  height: 90%;
  width: 100%;
}

#main > div {
  margin-bottom: 5em;
}

#main > div p {
  font-size: x-small;
  font-weight: bold;
  color: gray;
}

#main > div > div:nth-child(2)>div {
  text-align: right;
}

.underline:hover{
    cursor:pointer;
    text-decoration:underline;
    color:black !important;
}

#main > div > div:nth-child(2) > div > p:nth-child(2) {
  background-color: yellow;
}

.flex {
  display: flex;
  justify-content: space-between;
}

@media only screen and (min-width: 375px) and (max-width: 768px){
#main {
  grid-template-columns: repeat(2, 1fr);
  gap: 1em;
  
  width: 90%;
  margin: 10% auto;
}

.prev,
.next,
.text {
font-size: 11px;
}  



}

@media only screen and (min-width: 0px) and (max-width: 390px){
#main {
  grid-template-columns: 1fr;
  gap: 1em;
  
  width: 90%;
  margin: 10% auto;
}

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
.rightoptions p,#search-input{
font-size: 8px;
}
#footer a{
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
}

#sortPrice{
margin-top: 20px;
width: 200px;
height: 30px;
margin-left: 1030px;
border: 1px solid black;
}
#main {
  display: grid;
  grid-template-columns: repeat(${i}, minmax(220px, 1fr));
  gap: 1.8em;
  width: 80%;
  margin: 10% auto;
}

#main > div {
  justify-self: center;
  align-self: center; 
  width: 400px;
  height: 550px;
}
.img {
  position: sticky;
  top: 50%;
  right: 6px; 
  transform: translateY(-50%);
  width: 30px;
  height: auto;
}

`}    </style>
 <Navbar/>

 <img className='img' src={img} onClick={handle}/>
<div id="main">

    {products.map((product) => (
      <div>
        <img onClick={() => window.location.href = `oneProduct/${product.id}`}  src={product.img} alt="" />

        <div className="flex">
          <p>{product.name}</p>
          <div>
          <p style={{ textDecoration: 'line-through' }}>$2,990.00</p>

            <p>${product.price}</p>
          </div>
        </div>
      </div>
    ))}
  </div>

  <div id="footer"></div>
  
    
</div>

  );
};

export default AllProducts;
