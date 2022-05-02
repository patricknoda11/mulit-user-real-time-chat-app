import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Join.css';

const Join = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');

  const onSubmit = (e) => {
    e.preventDefault();
    navigate(`/chat?name=${name}&roomId=${roomId}`);
  };

  return (
    <div className="join">
      <div className="join-inner">
        <h1 className="heading">Join</h1>
        <form onSubmit={onSubmit}>
          <div className="form-group mt-20">
            <label>Name</label>
            <input
              className="form-control"
              type="text"
              placeholder="e.g. Emilia"
              required
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="form-group mt-20">
            <label>Room ID</label>
            <input
              className="form-control"
              type="text"
              placeholder="e.g. room1234"
              required
              onChange={(e) => setRoomId(e.target.value)}
            />
          </div>
          <button className="btn btn-primary mt-20" type="submit">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Join;
