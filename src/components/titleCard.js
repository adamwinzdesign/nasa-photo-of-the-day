import React from 'react';

const TitleCard = props => {
  return (
    <div className = 'title-card' key = '{props.id}'>
      <h1>Title for today's Image: {props.title}</h1>
    </div>
  )
}

export default TitleCard;