import React from 'react';
import './App.css';

function App() {
  return (
    <div class="portfolio">
      <div class="jumbotron">
        <h1>Trisha Le</h1>
        <h2>Software Developer | UI/UX Designer</h2>
      </div>
      {/* <div class="wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="#7c609c" fill-opacity="1" d="M0,96L80,117.3C160,139,320,181,480,181.3C640,181,800,139,960,128C1120,117,1280,139,1360,149.3L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path>
        </svg>
      </div> */}
  
      <div id="about" class="container-fluid">
        <p>Hello! My name is Trisha Le and I am currently an undergraduate student at UC Irvine studying Informatics and Education. 
          I am interested in front-end development, UI/UX design and research, educational technology, and project management.</p>
      </div>
    </div>
  );
}

export default App;
