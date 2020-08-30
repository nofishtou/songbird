import React, { useState, useEffect } from "react";
import { AnswerListItem } from "./answerListItem";
import { PickedAnswer } from "./pickedAnswer";
import { IBird } from "../interfaces/interfaces";
import {
  playAudioCorrect,
  playAudioFailure,
} from "../accessories/accessories";

interface IAnswersProps {
  birds: IBird[];
  answer: number;
  isCorrectAnswer: boolean;
  checkAnswer: Function;
  decrementCurrentScore: Function;
}

export function Answers(props: IAnswersProps): JSX.Element {
  const [currentAnswer, setCurrentAnswer] = useState(6);
  const [isCorrectAnswers, setIsCorrectAnswers] = useState([
    "default",
    "default",
    "default",
    "default",
    "default",
    "default",
  ]);

  useEffect(() => {
    setCurrentAnswer(6);
    setIsCorrectAnswers([
      "default",
      "default",
      "default",
      "default",
      "default",
      "default",
    ]);
  }, [props.birds]);

  const renderAnswers = (): JSX.Element[] => {
    return props.birds.map((bird, index) => (
      <AnswerListItem
        key={bird.id}
        isCorrectClass={isCorrectAnswers[index]}
        id={bird.id}
        pickAnswer={pickAnswer}
        name={bird.name}
      />
    ));
  };

  const pickAnswer = (id: number): void => {
    let currentIndex = 0;
    const newIsCorrectAnswers = [...isCorrectAnswers];
    props.birds.forEach((bird, index): void => {
      if (bird.id === id) {
        currentIndex = index;
        setCurrentAnswer(index);
      }
    });

    if (!props.isCorrectAnswer) {
      if (props.answer === id) {
        newIsCorrectAnswers[currentIndex] = "correct";
        setIsCorrectAnswers(newIsCorrectAnswers);
        playAudioCorrect();
        props.checkAnswer();
      } else {
        if (newIsCorrectAnswers[currentIndex] === "default") {
          newIsCorrectAnswers[currentIndex] = "wrong";
          props.decrementCurrentScore();
          playAudioFailure();
        }
      }
    }

    setIsCorrectAnswers(newIsCorrectAnswers);
  };

  return (
    <div className="answers">
      <div className="answers-list">
        <ul>{renderAnswers()}</ul>
      </div>
      <div className="answers-picked-answer">
        <PickedAnswer bird={props.birds[currentAnswer]} />
      </div>
    </div>
  );
}
