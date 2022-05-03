import React from 'react';
import './InfoBar.css';
import PropTypes from 'prop-types';
import onlineIcon from '../../assets/onlineIcon.png';
import closeIcon from '../../assets/closeIcon.png';

const InfoBar = ({ room }) => {
  return (
    <div className="info-bar-outer">
      <div className="info-bar-inner-left">
        <img className="online-icon" src={onlineIcon} alt="online image" />
        <h3>{room}</h3>
      </div>
      <div className="info-bar-inner-right">
        <a href="/">
          <img src={closeIcon} alt="close image" />
        </a>
      </div>
    </div>
  );
};

// type check InfoBar prop types:
InfoBar.propTypes = {
  room: PropTypes.string.isRequired
};

export default InfoBar;
