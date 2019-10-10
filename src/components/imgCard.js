import React from 'react';

const ImgCard = props => {
  return (
    <div className = 'img-card' key = '{props.id}'>
      <img src = {props.img} alt = 'NASA free resource of the day'/>
    </div>
  );
};

export default ImgCard;