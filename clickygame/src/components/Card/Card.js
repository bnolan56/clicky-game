import React from 'react';
import './Card.css'

const Card = props => {
  return (
    <img onClick={() => props.clickedTwice(props.id)} id={props.id} src={props.path} alt={props.name} />
  )
}

export default Card;
