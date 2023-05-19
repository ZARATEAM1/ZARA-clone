"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Cardd } from "./Cardd";

import 'bootstrap/dist/css/bootstrap.min.css';


interface WomenData {
  img: string;
  name: string;
}

function Women() {
  const [women, setWomen] = useState<WomenData[]>([]);

  useEffect(() => {
    axios
      .get<WomenData[]>("http://localhost:3001/api/products")
      .then((response) => {
        setWomen(response.data);
      })

      .catch((error) => console.log(error));
  }, []);

  return (

    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap' }}>

      {women.map((e, i) => (
        <div>
          <Cardd e={e} key={i} />

          <Link href={`oneProduct/${e.id}`}>{e.name}</Link>
        </div>

      ))}
    </div>

  );
}
export default Women;