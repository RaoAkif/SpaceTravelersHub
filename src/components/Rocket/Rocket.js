import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { reserveRocket, unReserveRocket } from '../../redux/rockets/rockets';
import './style.css';

function Rocket(props) {
  const dispatch = useDispatch();
  const {
    id,
    name,
    description,
    image,
    reserve,
  } = props;

  const reserveSpan = document.getElementById(id);
  const handleClick = () => {
    if (reserve) {
      dispatch(unReserveRocket(id));
      reserveSpan.classList.toggle('reserved');
    } else {
      dispatch(reserveRocket(id));
      reserveSpan.classList.toggle('reserved');
    }
  };

  return (
    <Card className="rocket">
      <Card.Img className="rocket-img" variant="top" src={image} />
      <Card.Body className="rocket-ription">
        <Card.Title className="rocket-title">{name}</Card.Title>
        <div style={{ height: '22px' }} className="rocket-reservation-badge">
          <span className="" id={id}>{reserve ? 'Reserved' : ''}</span>
        </div>
        <Card.Text>{description}</Card.Text>
        <Button type="button" className="reserve-rocket-btn" onClick={handleClick}>{reserve ? 'Cancel Reservation' : 'Reserve Rocket'}</Button>
      </Card.Body>
    </Card>
  );
}

Rocket.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  reserve: PropTypes.bool,
};

Rocket.defaultProps = {
  reserve: false,
};

export default Rocket;
