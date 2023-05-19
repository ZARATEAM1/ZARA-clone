import React from 'react';

// interface DetailProps {
//   e: {
//     img: string;
//     description: string;
//   };
// }

const Detail = ({ e }:any) => {
  console.log(e,'hh')
  return (
    <div>
      <img
        // src={e.img}
        style={{ width: '400px', height: '400px' }}
        alt="Product"
      />
      <h1>{e.description}</h1>
    </div>
  );
};

export default Detail;

