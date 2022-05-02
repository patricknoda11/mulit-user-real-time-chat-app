import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import io from 'socket.io-client';
import './Chat.css';

let socket;

const Chat = () => {
  const ENDPOINT = 'localhost:5012';
  const [searchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');
  [name, roomId];

  const formatText = (text) => {
    return text.trim();
  };

  useEffect(() => {
    // save search params as state:
    const { name, roomId } = Object.fromEntries([...searchParams]);
    setName(formatText(name));
    setRoomId(formatText(roomId));

    // initialize socket connection and emit join event:
    socket = io(ENDPOINT);
    socket.emit('join', { name, roomId }, () => {});

    // unmount
    return () => {
      socket.disconnect();
    };
  }, [ENDPOINT]);

  return <h1>Chat</h1>;
};

export default Chat;
