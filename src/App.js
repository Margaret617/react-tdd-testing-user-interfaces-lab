// src/App.js
import React from 'react';

function App() {
  return (
    <div>
      <h1>Hi, I'm Your Name</h1>
      <img 
        src="https://via.placeholder.com/150" 
        alt="my photo"
      />
      <h2>About Me</h2>
      <p>Biography text goes here. Replace this with actual content.</p>
      <a 
        href="https://github.com/your-username" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        GitHub
      </a>
      <a 
        href="https://linkedin.com/in/your-username" 
        target="_blank" 
        rel="noopener noreferrer"
      >
        LinkedIn
      </a>
    </div>
  );
}

export default App;
