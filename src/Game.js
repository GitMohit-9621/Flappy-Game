
import React, { useState, useEffect, useRef } from 'react';
import Bird from './Bird';
import Obstacle from './Obstacle';
import './Game.css';

const Game = () => {
  const [birdPosition, setBirdPosition] = useState(250);
  const [obstacleHeight, setObstacleHeight] = useState(200);
  const [obstacleLeft, setObstacleLeft] = useState(500);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gameAreaHeight = 500;
  const birdSize = 50;
  const gravity = 6;
  const jumpHeight = 50;

  useEffect(() => {
    let timeId;
    if (obstacleLeft >= 0 && !gameOver) {
      timeId = setInterval(() => {
        setObstacleLeft(obstacleLeft => obstacleLeft - 5);
      }, 24);
    } else {
      setObstacleLeft(500);
      setObstacleHeight(Math.floor(Math.random() * (gameAreaHeight - 150)));
      setScore(score => score + 1);
    }
    return () => clearInterval(timeId);
  }, [obstacleLeft, gameOver]);

  useEffect(() => {
    let timeId;
    if (!gameOver) {
      timeId = setInterval(() => {
        setBirdPosition(birdPosition => birdPosition + gravity);
      }, 24);
    }
    return () => clearInterval(timeId);
  }, [birdPosition, gameOver]);

  const handleJump = () => {
    let newBirdPosition = birdPosition - jumpHeight;
    if (!gameOver && newBirdPosition >= 0) {
      setBirdPosition(newBirdPosition);
    }
  };

  useEffect(() => {
    const hasCollided = 
      birdPosition >= gameAreaHeight - birdSize ||
      (birdPosition < obstacleHeight || birdPosition > obstacleHeight + 150) && (obstacleLeft >= 0 && obstacleLeft <= 50);

    if (hasCollided) {
      setGameOver(true);
    }
  }, [birdPosition, obstacleHeight, obstacleLeft]);

  return (
    <div className="game-area" onClick={handleJump}>
      <div className="score">Score: {score}</div>
      <Bird birdPosition={birdPosition} />
      <Obstacle obstacleHeight={obstacleHeight} obstacleLeft={obstacleLeft} />
      {gameOver && <div className="game-over">Game Over</div>}
    </div>
  );
};

export default Game;
