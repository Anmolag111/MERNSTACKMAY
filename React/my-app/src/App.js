import React from 'react';
import './App.css';
import Header from './components/Header';

function App() {
  var name="Amit";
  var age=20;
  return (
     <div>
   <Header  myName={name} Age={age}/ >
   <h1 className="hide" > React js </h1>
   </div>
  );
}

export default App;
