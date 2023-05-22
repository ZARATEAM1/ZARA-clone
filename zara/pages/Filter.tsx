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
        <style jsx>
            {`
            @import 'tailwindcss/tailwind.css';
            .form-select:focus,
            button:focus {
              outline: none; /* Remove the default focus outline */
            }
            
            .form-select {
              padding: 8px;
              border: 2px solid #ddd;
              border-radius: 4px;
              background-color: #fff;
              font-size: 16px;
              color: #333;
              transition: border-color 0.3s ease;
            }
            
            .form-select:focus {
              border-color: blue; /* Apply a border color when the element is focused */
              box-shadow: 0 0 5px rgba(0, 0, 255, 0.5); /* Apply a box shadow when the element is focused */
            }
            
            button {
              padding: 8px 16px;
              border: none;
              border-radius: 4px;
              background-color: #000000;
              color: #fff;
              font-size: 16px;
              cursor: pointer;
              transition: background-color 0.3s ease;
            }
            
            button:hover {
              background-color: #535353; /* Change the background color on hover */
            }
           `}
        </style>
    <select className="form-select" aria-label="Default select example" onChange={handleCategoryChange}>
      <option selected>Newst</option>
      <option value="Perfume">Perfume</option>
      <option value="CARGO">Cargo</option>
      <option value="T-Shirts">T-Shirts</option>
    </select>
  
    <button onClick={() => window.location.href = `man/${category}`}>Filter</button>
  </div>
  
  );
};

export default ProductFilter;
