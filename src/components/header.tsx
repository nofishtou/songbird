import React from "react";

interface IHeaderProps {
  score: number;
  currentPosition: number;
}

export function Header(props: IHeaderProps): JSX.Element {
  const positionNames = [
    "Разминка",
    "Воробьиные",
    "Лесные птицы",
    "Певчие птицы",
    "Хищные птицы",
    "Морские птицы",
  ];

  const renderPositions = (): JSX.Element[] => {
    return positionNames.map((name, index) => {
      return (
        <li
          key={index}
          className={index === props.currentPosition ? "header-active" : ""}
        >
          {name}
        </li>
      );
    });
  };

  return (
    <header>
      <div className="header-upper-header">
        <h1>
          Song<span className="color-red">Birds</span>
        </h1>
        <div>
          <span>Your Score:</span>
          <span className="header-score-number">{props.score}</span>
        </div>
      </div>
      <nav className="header-nav">
        <ul>{renderPositions()}</ul>
      </nav>
    </header>
  );
}
