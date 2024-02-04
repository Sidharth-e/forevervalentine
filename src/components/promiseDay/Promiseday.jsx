import React,{useState} from 'react'
import './Promiseday.scss'
export default function Promiseday() {
  const [isOpen, setIsOpen] = useState(false);
  const [lastTime, setLastTime] = useState(new Date(0));

  const handleEnvelopeClick = () => {
    const currentTime = new Date().getTime();
    if (currentTime - lastTime <= 1000) return;

    setIsOpen(!isOpen);
    setLastTime(currentTime);
  };

  const handleAnimationEnd = () => {
    setLastTime(new Date(0)); // Reset lastTime after the animation ends
  };
  return (
    <div className={`paperletter ${isOpen ? "open" : ""}`}>
      <div
        className={`envelope ${isOpen ? "open" : "close"}`}
        onClick={handleEnvelopeClick}
        onAnimationEnd={handleAnimationEnd}
      >
        <div className="wrapper"></div>
        <div className="content">
          <h1 className="title">This is a letter for you</h1>
          Your smile's like a sunrise, lighting up my days, 😊
Your sass and charm, in a million ways. 😉
Birthday wish for the one who steals my heart, 🎉
May your laughter forever make life a sweet dream. 😄
With you, love's an adventure, wild and ablaze! ❤️
        </div>
      </div>
    </div>
  )
}


