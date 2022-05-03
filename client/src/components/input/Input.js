import React from 'react';
import PropTypes from 'prop-types';
import './Input.css';

const Input = ({ value, setValue, onSubmit }) => {
  return (
    <form className="form" onSubmit={onSubmit}>
      <input
        className="input"
        value={value}
        placeholder="enter message"
        type="text"
        onChange={(e) => setValue(e.target.value)}
        onKeyDown={(e) => (e.event === 'Enter' ? setValue(e) : null)}
      />
      <button className="send-button" type="submit">
        Send
      </button>
    </form>
  );
};

// type check Input prop types:
Input.propTypes = {
  value: PropTypes.string.isRequired,
  setValue: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default Input;
