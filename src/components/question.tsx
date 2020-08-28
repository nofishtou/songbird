import React from 'react';
import Image from '../assets/img/questionImg.jpg';
import { Player } from './player';
import { IBird } from '../interfaces/interfaces';

interface IQuestionProps {
  bird: IBird,
  isCorrectAnswer: boolean,
}

export function Question(props: IQuestionProps): JSX.Element {
  return (
    <div className="question">
      <div className="question-image-container">
        {props.isCorrectAnswer ? <img src={props.bird.image} alt=""/> : <img src={Image} alt=""/> }
      </div>
      <div className="question-audio-container">
        {props.isCorrectAnswer ? <h3 className="question-name">{props.bird.name}</h3> : <h3 className="question-name">.....</h3> }
        <hr />
        <Player stopPlay={props.isCorrectAnswer} src={props.bird.audio}></Player>
      </div>
    </div>
  )
}