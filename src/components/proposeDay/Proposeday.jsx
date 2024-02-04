import React ,{useEffect} from "react";
import './Proposeday.scss';
let highestZ = 1;

class Paper {
  holdingPaper = false;
  mouseTouchX = 0;
  mouseTouchY = 0;
  mouseX = 0;
  mouseY = 0;
  prevMouseX = 0;
  prevMouseY = 0;
  velX = 0;
  velY = 0;
  rotation = Math.random() * 30 - 15;
  currentPaperX = 0;
  currentPaperY = 0;
  rotating = false;

  init(paper) {
    document.addEventListener('mousemove', (e) => {
      if(!this.rotating) {
        this.mouseX = e.clientX;
        this.mouseY = e.clientY;
        this.velX = this.mouseX - this.prevMouseX;
        this.velY = this.mouseY - this.prevMouseY;
      }
      const dirX = e.clientX - this.mouseTouchX;
      const dirY = e.clientY - this.mouseTouchY;
      const dirLength = Math.sqrt(dirX*dirX+dirY*dirY);
      const dirNormalizedX = dirX / dirLength;
      const dirNormalizedY = dirY / dirLength;
      const angle = Math.atan2(dirNormalizedY, dirNormalizedX);
      let degrees = 180 * angle / Math.PI;
      degrees = (360 + Math.round(degrees)) % 360;
      if(this.rotating) {
        this.rotation = degrees;
      }
      if(this.holdingPaper) {
        if(!this.rotating) {
          this.currentPaperX += this.velX;
          this.currentPaperY += this.velY;
        }
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;
        paper.style.transform = `translateX(${this.currentPaperX}px) translateY(${this.currentPaperY}px) rotateZ(${this.rotation}deg)`;
      }
    })
    paper.addEventListener('mousedown', (e) => {
      if(this.holdingPaper) return;
      this.holdingPaper = true;
      paper.style.zIndex = highestZ;
      highestZ += 1;
      if(e.button === 0) {
        this.mouseTouchX = this.mouseX;
        this.mouseTouchY = this.mouseY;
        this.prevMouseX = this.mouseX;
        this.prevMouseY = this.mouseY;
      }
      if(e.button === 2) {
        this.rotating = true;
      }
    });
    window.addEventListener('mouseup', () => {
      this.holdingPaper = false;
      this.rotating = false;
    });
  }
}

export default function Proposeday() {
  useEffect(() => {
    const papers = Array.from(document.querySelectorAll('.paper'));

    papers.forEach(paper => {
      const p = new Paper();
      p.init(paper);
    });

    return () => {
      // Clean up any event listeners or resources if needed
      // This function will be called when the component unmounts
    };
  }, []);
  return (
    <div className="proposeday">
      <div class="paper heart"></div>
      <div class="paper image">
        <p> and I fallen in</p>
        <p>Love with You 😍 </p>
        <img alt="pic" src="https://iili.io/HSzXpzg.jpg" />
      </div>
      <div class="paper image">
        <p></p>
        <img alt="pic" src="https://iili.io/HSzXbmF.jpg" />
      </div>
      <div class="paper image">
        <p>How can be </p>
        <p> someone so cute ❤️ </p>
        <img alt="pic" src="https://iili.io/HSzXyXa.jpg" />
      </div>
      <div class="paper red">
        <p class="p1"> and My Favorite</p>
        <p class="p2">Person 😍</p>
      </div>
      <div class="paper">
        <p class="p1">You are Cute </p>
        <p class="p1">
          Amazing <span style={{color: "red !important"}}>❤️</span>
        </p>
      </div>
      <div class="paper">
        <p class="p1">Drag the papers to move!</p>
      </div>
    </div>
  );
}
