import React, { useState, useRef, useEffect } from 'react';
import Header from './header/Header';
import Roseday from './roseDay/Roseday';
import Proposeday from './proposeDay/Proposeday';
import Chocolateday from './chocolateDay/Chocolateday';
import Teddday from './teddyDay/TeddyDay';
import Promiseday from './promiseDay/Promiseday';
import Hugday from './hugDay/Hugday';
import Kissday from './kissDay/Kissday';
import Valentinesday from './valentinesDay/Valentinesday';

export default function Main() {
  const [currentComponent, setCurrentComponent] = useState('Roseday');
  const componentRef = useRef(null);

  const handleComponentChange = (componentName) => {
    setCurrentComponent(componentName);
  };

  useEffect(() => {
    // Scroll to the component when it changes
    if (componentRef.current) {
      componentRef.current.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  }, [currentComponent]);

  return (
    <div className='main'>
      <Header onComponentChange={handleComponentChange} />
      <div className='component' ref={componentRef}>
        {currentComponent === 'Roseday' && <Roseday />}
        {currentComponent === 'Proposeday' && <Proposeday />}
        {currentComponent === 'Chocolateday' && <Chocolateday />}
        {currentComponent === 'TeddyDay' && <Teddday />}
        {currentComponent === 'PromiseDay' && <Promiseday />}
        {currentComponent === 'Hugday' && <Hugday />}
        {currentComponent === 'Kissday' && <Kissday />}
        {currentComponent === 'Valentinesday' && <Valentinesday />}
      </div>
    </div>
  );
}
