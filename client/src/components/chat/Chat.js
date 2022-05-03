import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import io from 'socket.io-client';
import './Chat.css';

import InfoBar from '../infoBar/InfoBar';
import Input from '../input/Input';
import Messages from '../messages/Messages';

let socket;

const Chat = () => {
  const ENDPOINT = 'localhost:5012';
  const [searchParams] = useSearchParams();
  const [name, setName] = useState('');
  const [roomId, setRoomId] = useState('');
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  [name, roomId];
  useEffect(() => {
    // save search params as state:
    const { name, roomId } = Object.fromEntries([...searchParams]);
    setName(name);
    setRoomId(roomId);

    // initialize socket connection and emit join event:
    socket = io(ENDPOINT);
    socket.emit('join', { name, roomId }, () => {});

    // unmount
    return () => {
      socket.disconnect();
    };
  }, [ENDPOINT]);

  useEffect(() => {
    socket.on('server-message', (msg) => {
      setMessages([...messages, msg]);
    });
  }, [message]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message) {
      return;
    }
    socket.emit('client-message', message, () => {
      setMessage('');
    });
  };

  return (
    <div className="outer-container">
      <div className="inner-container">
        <InfoBar room={roomId} />
        <Messages messages={messages} name={name} />
        <Input value={message} setValue={setMessage} onSubmit={sendMessage} />
      </div>
    </div>
  );
};

export default Chat;
