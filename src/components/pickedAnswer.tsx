import React from "react";
import { Player } from "./player";
import { IBird } from "../interfaces/interfaces";

type TPickedAnswer = IBird | undefined;

interface IPickedAnswer {
  bird: TPickedAnswer;
}

export function PickedAnswer(props: IPickedAnswer): JSX.Element {
  if (props.bird) {
    return (
      <>
        <div className="picked-answer">
          <div className="picked-answer-image">
            <img src={props.bird.image} alt="" />
          </div>
          <div className="picked-answer-audio">
            <h3>{props.bird.name}</h3>
            <hr />
            <h3>{props.bird.species}</h3>
            <Player stopPlay={null} src={props.bird.audio}></Player>
          </div>
        </div>
        <div className="picked-answer-info">
          <p>{props.bird.description}</p>
        </div>
      </>
    );
  }

  return <span>Прослушайте вопрос и выберите вариант ответа</span>;
}
