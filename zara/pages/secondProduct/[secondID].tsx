import { GetStaticPaths, GetStaticProps } from 'next';

import {
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBRow,
  MDBCol
} from 'mdb-react-ui-kit';

export const getStaticPaths: GetStaticPaths = async () => {
  const res = await fetch('http://localhost:3001/api/beauty');
  const data = await res.json();

  // map data to an array of path objects with params (secondID)
  const paths = data.map((product: { id: number }) => {
    return {
      params: { secondID: product.id.toString() }
    };
  });

  return {
    paths,
    fallback: false
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const secondID = context.params?.secondID;
  const res = await fetch(`http://localhost:3001/api/getone/${secondID}`);
  const data = await res.json();

  console.log("Product Data:", data); // Check the response data

  return {
    props: { product: data }
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

const Details: React.FC<{ product: Product }> = ({ product }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '150vh' }}>
      <div style={{ width: '300px' }}>
        <MDBCard className="container">
          <MDBCardBody>
            <MDBCardTitle className="h1-responsive">{product.name}</MDBCardTitle>
            <MDBCardText className="lead">{product.category}</MDBCardText>
            <MDBCardImage style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60vh' }} src={product.img} alt={product.name} fluid />
            <MDBRow>
              <MDBCol md="6">
                <MDBCardText className="mb-0">Size: {product.size}</MDBCardText>
                <MDBCardText className="mb-0">Category: {product.category}</MDBCardText>
                <MDBCardText className="mb-0">Color: {product.color}</MDBCardText>
              </MDBCol>
              <MDBCol md="6">
                <MDBCardText className="mb-0">Model: {product.description}</MDBCardText>
                <MDBCardText className="mb-0">Gender: {product.gender}</MDBCardText>
                <MDBCardText className="mb-0">Price: {product.price} DNT</MDBCardText>
              </MDBCol>
            </MDBRow>
            <button type="button" data-mdb-ripple-color="dark">ADD TO BAG</button>
          </MDBCardBody>
        </MDBCard>
      </div>
    </div>
  );
};

export default Details;
