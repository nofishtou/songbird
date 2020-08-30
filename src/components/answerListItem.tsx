import React from "react";

interface IPropsAnswerLIstItem {
  id: number;
  pickAnswer: Function;
  name: string;
  isCorrectClass: string;
}

export function AnswerListItem(props: IPropsAnswerLIstItem): JSX.Element {
  return (
    <li
      className={`answers-list-item ${props.isCorrectClass}`}
      onClick={() => props.pickAnswer(props.id)}
    >
      {props.name}
    </li>
  );
}
