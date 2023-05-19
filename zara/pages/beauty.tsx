
"use client"
import Link from "next/link";
import React, { useEffect, useState } from "react";
import axios from "axios";

import { Cardd } from "./Cardd";
import 'bootstrap/dist/css/bootstrap.min.css';


interface BeautyData {
  img: string;
  name: string;
}

function beauty() {
  const [Beauty, setBeauty] = useState<BeautyData[]>([]);

  useEffect(() => {
    axios
      .get<BeautyData[]>("http://localhost:3001/api/beauty")
      .then((response) => {
        setBeauty(response.data);
        console.log(Beauty)
      })

      .catch((error) => console.log(error));
  }, []);

  return (

    <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', flexWrap: 'wrap' }}>

      {Beauty.map((e, i) => (
        <div>
          <Cardd e={e} key={i} />

          <Link href={`secondProduct/${e.id}`}>{e.name}</Link>
        </div>

      ))}
    </div>

  );
}
export default beauty;