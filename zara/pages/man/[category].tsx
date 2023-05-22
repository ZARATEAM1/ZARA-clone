import { GetStaticPaths, GetStaticProps } from 'next';
import Navbar from '../navbar';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3002/api/get');
  const data = await res.json();

 
  const paths = data.map((product: { category: string }) => {
    return {
      params: { category: product.category.toString() }
    };
  });
  
  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const category = context.params?.category;
  const res = await fetch(`http://localhost:3002/api/${category}`);
  const data = await res.json();

  console.log("Product Data:", data);

  return {
    props: { products: data }
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

const Details: React.FC<{ products: Product[] }> = ({ products }) => {
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
          grid-template-columns: repeat(3, minmax(220px, 1fr));
          gap: 1.8em;
          width: 90%;
          margin: 10% auto;
        }
        
        #main > div {
          /* Adjust the width and height to make the products bigger */
          width: 400px;
          height: 550px;
        }
        
        `}    </style>
      <Navbar />
     

      <div id="main">
        {products.map((e) => (
          <div key={e.id}>
            <img onClick={() => window.location.href = `onee/${e.id}`} src={e.img} alt="" />

            <div className="flex">
              <p>{e.name}</p>
              <div>
                <p style={{ textDecoration: 'line-through' }}>$2,990.00</p>
                <p>${e.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div id="footer"></div>
    </div>
  );
};

export default Details;


