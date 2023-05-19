"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Detail from "./Detail";
import { Cardd } from "./Cardd";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Detail from "./components/detail";

interface WomenData {
  img: string;
  name: string;
  price: number;
  description: string;
  id: string;
  color:string
}

function Women() {
  const [women, setWomen] = useState<WomenData[]>([]);

  useEffect(() => {
    axios
      .get<WomenData[]>("http://localhost:3002/api/products")
      .then((response) => {
        setWomen(response.data);
      })
     
      .catch((error) => console.log(error));
    }, []);
  
    return (
      <>
        <div className="container">
          <div className="row">
            {women.map((e, i) => (
              <div className="col-md-3" key={i}>
                <div className="card mb-3">
                  <img className="card-img-top" src={e.img} alt="Card image cap" />
                  <div className="card-body">
                    <h5 className="card-title">{e.name}</h5>
                    <p className="card-text">{e.color}</p>
                  </div>
                  <div className="card-footer">
                    <small className="text-muted">{e.price}</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <style jsx>{`
          .card {
            border: none;
            box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
            border-radius: 4px;
          }
    
          .card-img-top {
            height: 250px;
            object-fit: cover;
            border-radius: 4px 4px 0 0;
          }
    
          .card-body {
            padding: 1.5rem;
          }
    
          .card-title {
            font-size: 1.1rem;
            font-weight: bold;
            margin-bottom: 0.5rem;
          }
    
          .card-text {
            font-size: 0.9rem;
            color: #6c757d;
            margin-bottom: 1rem;
          }
    
          .text-muted {
            font-size: 0.8rem;
          }
        `}</style>
      </>
    );
    
      
    
    
    
    
    
    
    }
    export default Women;