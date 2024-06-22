import React from 'react';

const Bird = ({ birdPosition }) => {
  return (
    <div 
      className="bird"
      style={{ top: birdPosition + 'px' }}
    ></div>
  );
};

export default Bird;
