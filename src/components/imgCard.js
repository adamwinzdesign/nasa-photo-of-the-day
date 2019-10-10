import React from 'react';

const ImgCard = props => {
  return (
    <div className = "img-card" key = '{props.id}'>
      <img src = {props.hdurl} />
    </div>
  );
};

export default ImgCard;