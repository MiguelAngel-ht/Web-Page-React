import React from 'react';
import {CardItem} from '..';

import './Cards.css';

import data from '../../../constants';

function Cards(props) {
    return (
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
    );
  }

export default Cards;
