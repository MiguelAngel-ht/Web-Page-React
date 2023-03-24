import React from 'react';
import './App.css';

import {Header, Carousel, CardItem} from './components/common';

import data from './constants';

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

    </div>
  );
}

export default App;


