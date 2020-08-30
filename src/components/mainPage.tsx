import React, { useState, useEffect, useRef } from "react";
import Birds from "../data/birds";
import { Answers } from "./answers";
import { Header } from "./header";
import { Modal } from "./modal";
import { Question } from "./question";
import {
  getRandomIntInclusive,
  createResultText,
} from "../accessories/accessories";

export function MainPage(): JSX.Element {
  const [score, setScore] = useState(0);
  const [currentPosition, setCurrentPosition] = useState(5);
  const [questionNumber, setQuestionNumber] = useState(0);
  const [answerId, setAnswerId] = useState(0);
  const [isCorrectAnswer, setIsCorrectAnswer] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);
  const [modalText, setModalText] = useState("");
  let currentScore: number = useRef(5).current;

  const changeStage = () => {
    let newCurrentPosition = currentPosition;
    if (currentPosition < Birds.length - 1) {
      setCurrentPosition(newCurrentPosition + 1);
      setIsCorrectAnswer(false);
    }
  };

  const checkAnswer = () => {
    let newScore = score + currentScore;
    setIsCorrectAnswer(true);
    setScore(newScore);

    if (currentPosition === Birds.length - 1) {
      setIsEnd(true);
      setIsShowModal(true);
      setModalText(createResultText(newScore));
    }
  };

  const playAgain = () => {
    setCurrentPosition(0);
    setScore(0);
    setIsEnd(false);
    setIsCorrectAnswer(false);
    setIsShowModal(false);
  };

  const closeModal = () => {
    setIsShowModal(false);
  };

  const decrementCurrentScore = () => {
    currentScore--;
  };

  useEffect(() => {
    setQuestionNumber(getRandomIntInclusive(0, 5));
  }, [currentPosition]);

  useEffect(() => {
    setAnswerId(Birds[currentPosition][questionNumber].id);
  }, [questionNumber, currentPosition]);

  useEffect(() => {
    console.log(answerId, "answer");
  }, [answerId]);

  return (
    <>
      <Header score={score} currentPosition={currentPosition} />
      <Question
        bird={Birds[currentPosition][questionNumber]}
        isCorrectAnswer={isCorrectAnswer}
      />
      <Answers
        birds={Birds[currentPosition]}
        checkAnswer={checkAnswer}
        decrementCurrentScore={decrementCurrentScore}
        isCorrectAnswer={isCorrectAnswer}
        answer={answerId}
      />
      <div className="main-page-buttons">
        {isEnd ? (
          ""
        ) : (
          <button
            className="main-page-button"
            onClick={changeStage}
            disabled={!isCorrectAnswer}
          >
            Следующий уровень
          </button>
        )}
      </div>
      <Modal text={modalText} isShow={isShowModal} closeModal={closeModal} playAgain={playAgain} />
    </>
  );
}
