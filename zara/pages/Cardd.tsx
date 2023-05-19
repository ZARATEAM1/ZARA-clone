import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react'


export const Cardd = ({ e }: any) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.img} />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>

        <Card.Text>
          <div>
            {e.description}

          </div>

        </Card.Text>

      </Card.Body>
    </Card>
  );
}
