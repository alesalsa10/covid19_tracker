import React from 'react';

const Card = ({ category, numbers, date }) => {
  return (
    <div className='card'>
      <p>{category}</p>
      <p>{numbers}</p>
      <p>{date}</p>  
    </div>
  );
};

export default Card;
