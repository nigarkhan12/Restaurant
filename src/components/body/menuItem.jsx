import React from "react";
import { Card } from "react-bootstrap";

const MenuItem = (props) => {
  console.log(props);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={props.dish.image} />
        <Card.Body>
          <Card.Title style={{ cursor: "pointer" }}>
            {props.dish.name}
          </Card.Title>
          <Card.Text>{props.dish.description}</Card.Text>
          <p>Price: ${props.dish.price}</p>
          <p>
            Label: <b>{props.dish.label}</b>
          </p>
        </Card.Body>
      </Card>
    </div>
  );
};

export default MenuItem;
