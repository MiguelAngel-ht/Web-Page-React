import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel } from 'react-bootstrap';
import './Carousel.css';


function MyCarousel() {
  return (
    <Carousel className="slides">
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="https://phantom-marca.unidadeditorial.es/32516217f007695d28818ff6bb89aa97/resize/1320/f/jpg/assets/multimedia/imagenes/2022/08/23/16612714132976.jpg"
          alt="First slide"
        />
        <div className="caption-overlay"></div>
        <Carousel.Caption>
          <h3>One Piece</h3>
          <p>Aventura épica de piratas en busca del tesoro legendario.</p>
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="https://www.gamerfocus.co/wp-content/uploads/2022/09/Hunter-x-Hunter-Gon.jpg"
          alt="Second slide"
        />
        <div className="caption-overlay"></div>
        <Carousel.Caption>
          <h3>Hunter x Hunter</h3>
          <p>Un Gon persigue sus sueños en un mundo lleno de aventuras, desafíos y enemigos poderosos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 image"
          src="https://pbs.twimg.com/media/D3GrshOWwAA03Dr.jpg:large"
          alt="Third slide"
        />
        <div className="caption-overlay"></div>
        <Carousel.Caption>
          <h3>A Quintessential Quintuplets</h3>
          <p>Cinco hermanas que con ayuda de su tutor buscan sus sueños.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCarousel;

