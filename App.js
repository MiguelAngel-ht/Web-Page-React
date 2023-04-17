import React from 'react';
import './App.css';

//  IMPORTING ELEMENTS OF THE PAGE
import {Header, Carousel, Cards, Contact, Footer} from './components/common';

// APP FUNCTION
function App() {
  return (
    <div className="App">
      
      <Header />

      <Carousel />
      
      <center><h1>Para ver</h1></center>
      <Cards />

      <center> <h1>Contáctanos</h1> </center>
      
      <Contact />

      <Footer />

    </div>
  );
}

export default App;


