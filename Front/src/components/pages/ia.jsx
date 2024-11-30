import './ia.css'
import axios from 'axios';
import { useState } from 'react';

const IA_URL = 'http://localhost:3000/ia/ask';

export default function IA() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState([]);

  const askQuestion = async () => {
    if (!question && question === '') return;

    try {
      const response = await axios.post(IA_URL, { question });
      console.log(response.data);
      setAnswer(response.data.answer);

    } catch (error) {
      console.error(error);
    }
  }

  return (
      <div className="container">
        <div className="content">
          <h1 className="main-title">PickEngine</h1>
          <h2 className="subtitle">IA</h2>
          <div className="button-group">
            <button className="info-button">¿Qué es un auto?</button>
            <button className="info-button">¿Cuándo hacer cambio de aceite?</button>
            <button className="info-button">Estrategias para el ahorro de combustible</button>
            <button className="info-button">¿Cómo saber la presión ideal para mis llantas?</button>
          </div>

          <div className="conversation">
            <div>
              <h3 className="question">Question</h3>
              <p>{question}</p>
            </div>
            <div>
              <h3 className="answer">Answer</h3>
              <p>{answer}</p>
            </div>
          </div>

          <div className="search-bar">
            <input type="text" placeholder="Please enter" value={question} onChange={(e) => setQuestion(e.target.value)} />
            <button className="search-button" onClick={askQuestion}>🔍</button>
          </div>
        </div>
      </div>
    );
}