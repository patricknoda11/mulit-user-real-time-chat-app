import React from 'react';
import PropTypes from 'prop-types';
import './Message.css';

const Message = ({ message: { user, text }, name }) => {
  const isPersonalMessage = () => {
    const refinedName = name.trim().toLowerCase();
    return user === refinedName;
  };

  return isPersonalMessage() ? (
    <div className="message-container justify-end">
      <p className="sent-text pr-10">{user}</p>
      <div className="message-box background-blue">
        <p className="message-text color-white">{text}</p>
      </div>
    </div>
  ) : (
    <div className="message-container justify-start">
      <div className="message-box background-light">
        <p className="message-text color-dark">{text}</p>
        <p className="sent-text pl-10">{user}</p>
      </div>
    </div>
  );
};

Message.propTypes = {
  message: PropTypes.exact({
    user: PropTypes.string,
    text: PropTypes.string
  }),
  name: PropTypes.string.isRequired
};

export default Message;
