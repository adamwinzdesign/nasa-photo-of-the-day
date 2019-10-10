import React from 'react';

const DescriptionCard = props => {
  return (
    <div className = 'description-card' key = '{props.id}'>
      <h1>Description for image:</h1>
      <p>{props.explanation}</p>
    </div>
  )
}

export default DescriptionCard;