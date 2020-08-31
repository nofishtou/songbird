import React from "react";

interface IModalProps {
  isShow: boolean;
  closeModal: Function;
  text: string;
  playAgain: Function;
}

export function Modal(props: IModalProps): JSX.Element {
  return (
    <div className={props.isShow ? "modal modal-show" : "modal"}>
      <div className="modal-content">
        <button className="modal-hide-btn" onClick={() => props.closeModal()}>
          ✕
        </button>
        <div className="modal-text">
          <p>{props.text}</p>
          <div className="modal-page-buttons">
            <button className="main-page-button" onClick={() => props.playAgain()}>
              Сыграть снова
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
