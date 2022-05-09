import React from 'react';
import Sidebar from './Sidebar';
import './App.css';

function App() {
  return (
    <div className="App" id="outer-container">
      <Sidebar pageWrapId={'page-wrap'} outerContainerId={'outer-container'} />
      <div id="page-wrap" >
        <h1>Cool Restaurant</h1>
        <h2>Check out our offerings in the sidebar!</h2>
      </div>
    </div>
  );
}

export default App;	