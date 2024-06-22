import React from 'react';

const Obstacle = ({ obstacleHeight, obstacleLeft }) => {
  return (
    <div>
      <div 
        className="obstacle top"
        style={{ height: obstacleHeight + 'px', left: obstacleLeft + 'px' }}
      ></div>
      <div 
        className="obstacle bottom"
        style={{ height: 500 - obstacleHeight - 150 + 'px', left: obstacleLeft + 'px' }}
      ></div>
    </div>
  );
};

export default Obstacle;
