import React,{useEffect} from 'react'
import './Roseday.scss'
import Lottie from 'lottie-react';
import Rose from '../../assets/rose.json'
export default function Roseday() {
  const name="Happy Rose Day";
  useEffect(() => {
    const letters = document.querySelectorAll(".letter");

    function getRandomNeonColor() {
      const randomChannel = () => Math.floor(Math.random() * 155 + 100);
      const randomRed = randomChannel();
      const randomGreen = randomChannel();
      const randomBlue = randomChannel();
      return `rgb(${randomRed},${randomGreen},${randomBlue})`;
    }

    function applyRandomProperties(letter) {
      const randomDelay = Math.random() * 0.6;
      const randomColor = getRandomNeonColor();

      letter.style.animation = `randomMove 0.6s infinite alternate ${randomDelay}s`;
      letter.style.color = randomColor;

      setInterval(function () {
        letter.style.color = getRandomNeonColor();
      }, 1000); // Update color every 1000 milliseconds (1 second)
    }

    letters.forEach(applyRandomProperties);
  }, []);

  useEffect(() => {
    const balloons = document.querySelectorAll(".balloon");

    function getRandomColor() {
      const randomRed = Math.floor(Math.random() * 80 + 20);
      const randomGreen = Math.floor(Math.random() * 50 + 20);
      const randomBlue = Math.floor(Math.random() * 80 + 20);
      return `rgb(${randomRed},${randomGreen},${randomBlue})`;
    }

    function applyRandomColor(balloon) {
      const randomColor = getRandomColor();
      balloon.querySelector("svg").style.fill = randomColor;
    }

    function onAnimationIteration(event) {
      const balloon = event.target;
      applyRandomColor(balloon);
    }

    balloons.forEach((balloon) => {
      balloon.addEventListener("animationiteration", onAnimationIteration);
      applyRandomColor(balloon);
    });
  }, []);
  return (
    <div className='roseday'>
      <Lottie animationData={Rose}/>
      <div className="random-word">
  {name.split(' ').map((word, wordIndex) => (
    <React.Fragment key={wordIndex}>
      {word.split('').map((char, charIndex) => (
        <span key={charIndex} className="letter">
          {char}
        </span>
      ))}
      {wordIndex < name.split(' ').length - 1 && <span className="space"> </span>}
    </React.Fragment>
  ))}
</div>
    </div>
  )
}
