import React, { useState } from 'react';
import './App.scss';

import Portfolio from './components/portfolio';

function App() {

  const [theme, setTheme] = useState('light');

  const changeTheme = () => {
      return theme === 'light' ? setTheme('dark') : setTheme('light');
  }

  return (
    <div className={`App ${theme}`}>
      <Portfolio changeTheme={changeTheme}/>
    </div>
  );
}

export default App;
