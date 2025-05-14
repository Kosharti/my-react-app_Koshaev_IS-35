import React from 'react';
import Message from './Message';

const App: React.FC = () => {
  const messageText = "Hello, this is a message!"; 
  return (
    <div>
      <h1>My Vite + React + TypeScript App</h1>
      <Message text={messageText} /> 
    </div>
  );
};

export default App;
