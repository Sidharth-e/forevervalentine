// Header.jsx
import React from 'react';
import './Header.scss';
import { FaLock } from "react-icons/fa";


const Header = ({ onComponentChange }) => {
  const days = ["Roseday","Proposeday","Chocolateday","TeddyDay","PromiseDay","Hugday","Kissday","Valentinesday"];
  
  // Get the current date
  const currentDate = new Date();
  // Define the exact dates for each event
  const eventDates = [
    new Date('2024-02-07'), // Roseday
    new Date('2024-02-08'), // Proposeday
    new Date('2024-02-09'), // Chocolateday
    new Date('2024-02-10'), // TeddyDay
    new Date('2024-02-11'), // PromiseDay
    new Date('2024-02-12'), // Hugday
    new Date('2024-02-13'), // Kissday
    new Date('2024-02-14')  // Valentinesday
  ];

  return (
    <div className="header">
      {days.map((day, index) => {
        // Compare the current date with the event date
        const disableButton = currentDate < eventDates[index];
        return (
          <button 
            key={index} 
            onClick={() => onComponentChange(day)} 
            disabled={disableButton}
          >
            {day} {disableButton?<FaLock/>:""}
          </button>
        );
      })}
    </div>
  );
};

export default Header;
