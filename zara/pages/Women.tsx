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
      
      <div style={{  display: 'flex', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          
            {women.map((e,i) => (
                <Cardd e={e} key={i} />
                  // {/* <div onClick={()=>window.location.href='/Detail'}>{e.name}</div> */}
                  // {/* <div>
                  // <Link href="/Detail">show details</Link>

                  // // </div> */}

                  //  {/* <Link href='/Detail'><Detail  e={e}/></Link> */}
               
              ))}
               </div>
      
      );
    }
    export default Women;