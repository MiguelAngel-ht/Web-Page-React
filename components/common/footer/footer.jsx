import React from 'react';
import './footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h4>Contáctanos</h4>
            <ul className="list-unstyled">
              <li><i className="fa fa-envelope"></i> info@tupagina.com</li>
              <li><i className="fa fa-phone"></i> +1 (123) 456-7890</li>
              <li><i className="fa fa-map-marker"></i> Dirección de la empresa, Ciudad, País</li>
            </ul>
          </div>
          <div className="col-sm-12 col-md-6">
            <h4>Síguenos en redes sociales</h4>
            <ul className="list-unstyled">
              <li><a href="#"><i className="fa fa-facebook"></i> Facebook</a></li>
              <li><a href="#"><i className="fa fa-twitter"></i> Twitter</a></li>
              <li><a href="#"><i className="fa fa-instagram"></i> Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
