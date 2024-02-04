// Header.jsx
import React from 'react';
import './Header.scss';

const Header = ({ onComponentChange }) => {
  return (
    <div className="header">
      <button onClick={() => onComponentChange('Roseday')}>Roseday</button>
      <button onClick={() => onComponentChange('Proposeday')}>Proposeday</button>
      <button onClick={() => onComponentChange('Chocolateday')}>Chocolateday</button>
      <button onClick={() => onComponentChange('PromiseDay')}>PromiseDay</button>
      <button onClick={() => onComponentChange('Hugday')}>Hugday</button>
      <button onClick={() => onComponentChange('Kissday')}>Kissday</button>
      <button onClick={() => onComponentChange('Valentinesday')}>Valentinesday</button>
    </div>
  );
};

export default Header;
