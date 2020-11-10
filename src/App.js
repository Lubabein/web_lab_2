import React from 'react';
import logo from './logo.svg';
import sasuke from './111_1.svg'
import sasuke1 from './111.png'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={sasuke1} className="App-logo" alt="сууукааа" />
        <p>
        Sasuke returns to Konoha!!!
        </p>
        <a
          className="App-link"
          href="https://yandex.ru/maps/-/CCQ3RHUVOC"
          target="_blank"
          rel="noopener noreferrer"
        >
          Konoha  
        </a>
        
      </header>
    </div>
  );
}

export default App;
