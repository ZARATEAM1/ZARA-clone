// import React from 'react'

// function beaty() {
//   return (
//     <div>beaty</div>
//   )
// }

// export default beaty
"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Detail from "./Detail";
import { Cardd } from "./Cardd";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Detail from "./components/detail";

interface BeautyData {
  img: string;
  name: string;
}

function Beauty() {
  const [Beauty, setBeauty] = useState<BeautyData[]>([]);

  useEffect(() => {
    axios
      .get<BeautyData[]>("http://localhost:3002/api/beauty")
      .then((response) => {
        setBeauty(response.data);
      })
     
      .catch((error) => console.log(error));
    }, []);
  
    return (
      
      <div style={{  display: 'flex', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap' }}>
          
            {Beauty.map((e,i) => (
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
    export default Beauty;