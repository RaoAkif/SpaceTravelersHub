import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import './style.css';

function Rocket(props) {
  const { name, desc, image } = props;
  return (
    <Card className="rocket">
      <Card.Img className="rocket-img" variant="top" src={image} />
      <Card.Body className="rocket-desc">
        <Card.Title className="rocket-title">{name}</Card.Title>
        <Card.Text>{desc}</Card.Text>
        <Button className="reserve-rocket-btn" variant="primary">Reserve Rocket</Button>
      </Card.Body>
    </Card>
  );
}

Rocket.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default Rocket;
