'use client'
import { useState } from 'react';
import Navbar from './navbar';
import { bootstrapUtils } from 'react-bootstrap/lib/utils';


const ProductFilter = () => {
    const [category, setCategory] = useState('');
    const [data, setData] = useState([]);
  
    const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
      setCategory(event.target.value);
      console.log(category)
    };
  return (
    <div>
      <select className="form-select" aria-label="Default select example" onChange={handleCategoryChange}>
  <option selected>Newst</option>
  <option value="Blazer">Blazers</option>
  <option value="Beauty">Beauty</option>
  <option value="T-Shirts">T-Shirts</option>
</select>

      <button onClick={() => window.location.href = `man/${category}`}>Filter</button>
           
</div>
  );
};

export default ProductFilter;
