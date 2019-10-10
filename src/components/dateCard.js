import React from 'react';

const DateCard = props => {
  return (
    <div className = 'date-card' key = '{props.id}'>
      <h1>Image for Date: {props.date}</h1>
    </div>
  )
}

export default DateCard;