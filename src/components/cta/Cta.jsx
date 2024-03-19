import React from "react";
import './cta.css';
import { useNavigate } from 'react-router-dom';

const Cta = () => {

  const navigate = useNavigate();

  const changeDiv = () => {
    navigate('/Bard');
  }
    return (
        <div className="gpt3__cta">
    <div className="gpt3__cta-content">
      <h3>Try the Gemini now...</h3>
    </div>
    <div className="gpt3__cta-btn">
      <button onClick={changeDiv} type="button">Get Started</button>
    </div>
  </div>
    );
}

export default Cta;