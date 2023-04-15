import React from 'react';
import './App.css';

//  IMPORTING ELEMENTS OF THE PAGE
import {Header, Carousel, CardItem, Contact, Footer} from './components/common';

// IMPORTING CONSTANT AND GLOBAL VALUES
import data from './constants';

// APP FUNCTION
function App() {
  return (
    <div className="App">
      <Header />

      <Carousel />
      
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <CardItem 
              imgSrc={data[0].imgSrc} 
              title={data[0].title}
              description={data[0].description}
            />
          </div>
          <div className="col-md-4">
            <CardItem
              imgSrc={data[1].imgSrc} 
              title={data[1].title}
              description={data[1].description}
            />
          </div>
          <div className="col-md-4">
            <CardItem 
              imgSrc={data[2].imgSrc} 
              title={data[2].title}
              description={data[2].description} 
            />
          </div>
        </div>
      </div>

    <Contact />

    <Footer />

    </div>
  );
}

export default App;


