import Card from 'react-bootstrap/Card';
import React from 'react';
import './CardItem.css';

function CardItem(props) {
    return (
      <Card class = "card-class" style={{ width: '18rem' }}>
        <Card.Img class="card-image" variant="top" src={props.imgSrc} />
        <Card.Body>
          <Card.Title class='card-title'>{props.title}</Card.Title>
          <Card.Text class='card-text'>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    );
  }

export default CardItem;