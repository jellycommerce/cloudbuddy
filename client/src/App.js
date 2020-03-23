import React, { useState } from 'react';
import './App.css';
import VideoChat from './VideoChat';
// import Donate from './Donate';

const App = () => {
  return (
    <div className="app">
      <main>
        <VideoChat />
      </main>
        <footer>
          <p>
            Made with &hearts; in San Diego, California
          </p>
        </footer>
      {/* <Donate /> */}
    </div>
  );
};

export default App;
