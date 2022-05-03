import React from 'react';
import PropTypes from 'prop-types';
import ScrollToBottom from 'react-scroll-to-bottom';
import './Messages.css';

import Message from '../Message/Message';

const Messages = ({ messages, name }) => {
  console.log(messages.length);
  return (
    <ScrollToBottom className="messages">
      {messages.map((msg, i) => (
        <div key={i}>
          <Message message={msg} name={name} />
        </div>
      ))}
    </ScrollToBottom>
  );
};

// type checking Messages' props
Messages.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.exact({
      user: PropTypes.string,
      text: PropTypes.string
    })
  ),
  name: PropTypes.string.isRequired
};

export default Messages;
