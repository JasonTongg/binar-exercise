import './App.css';
import Person from './components/PersonConteiner'
import Github from './components/GithubProfile'
import React from 'react';

function App() {
  return (
    <React.Fragment>
      <Person />
      <Github />
    </React.Fragment>
  );
}

export default App;
