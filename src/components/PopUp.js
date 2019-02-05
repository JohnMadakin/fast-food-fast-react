import React from 'react';

const PopUp = (props) => {
  return (
    <div className="pop-up">
    <div className="pop-up-container">
      <div className="pop-up-msg-group">
        <h2 className="pop-up-title">{props.message.title}</h2>
        <p className="pop-up-message">{props.message.body}</p>
        <p className="close-pop-up" onClick={props.closePopUp} >{props.message.footer}</p>
      </div>
    </div>
  </div>
  )
}

export default PopUp;