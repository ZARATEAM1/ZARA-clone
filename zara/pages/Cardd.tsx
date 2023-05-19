import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import React from 'react'

export const Cardd = ({e}:any) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={e.img} />
      <Card.Body>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text>
          {e.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Cras justo odio</ListGroup.Item>
        <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
      </ListGroup>
      <Card.Body>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}
