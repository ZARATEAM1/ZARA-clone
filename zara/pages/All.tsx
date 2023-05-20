import axios from 'axios';
import { useEffect, useState } from 'react';

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
`}
      </style>
  <div>
    {products.map((product) => (
      <div key={product.id}>
        <img src={product.img} alt={product.name} />
        <div className="flex">
          <p>{product.name}</p>
          <div>
            <p>{product.price}</p>
          </div>
        </div>
      </div>
    ))}
  </div>

  <body>
    <div id="navbar"></div>

    <select name="" id="sortPrice">
      <option value="">FILTER & SORT</option>
      <option value="low">Low To High</option>
      <option value="high">High To Low</option>
      <option value="less">Less than 2000</option>
      <option value="greater">Greater than 500</option>
    </select>

    <div id="main" className="grid">
      
      {products.map((product) => (
        <div key={product.id}>
          <img src={product.img} alt={product.name} />

          <div className="flex">
            <p>{product.name}</p>
            <div>
              <p>{product.price}</p>
            </div>
          </div>
        </div>
      ))}
    </div>

    <div id="footer"></div>
  </body>
</div>

  );
};

export default AllProducts;
