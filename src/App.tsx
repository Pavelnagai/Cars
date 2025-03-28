import React, { useState } from 'react';
import axios from 'axios';

function App() {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

    const sendMessageToBot = async () => {
        try {
            const res = await axios.post('http://localhost:8080/send', { message });
            setResponse(res.data);
        } catch (error) {
            console.error('Ошибка:', error);
        }
    };

  return (
      <div style={{ padding: '20px' }}>
        <h1>Управление Telegram-ботом</h1>
        <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Введите сообщение"
        />
        <button onClick={sendMessageToBot}>Отправить</button>
        {response && <p>Ответ бота: {response}</p>}
      </div>
  );
}

export default App;
