// import React from 'react';
// import './Navbar.css';

// import { Navbar, Nav } from 'react-bootstrap';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faBars } from '@fortawesome/free-solid-svg-icons';


// const Navigation = () => {
//     return (
//       <Navbar expand="md" sticky="top">
        
//         <Navbar.Toggle aria-controls="responsive-navbar-nav">
//           <FontAwesomeIcon icon={faBars} />
//         </Navbar.Toggle>

//         <Navbar.Collapse id="responsive-navbar-nav">

//           <Nav className="ml-auto">
//             <Nav.Link href="#">Home</Nav.Link>
//             <Nav.Link href="#">Info</Nav.Link>
//             <Nav.Link href="#">About</Nav.Link>
//             <Nav.Link href="#">Contact</Nav.Link>
//           </Nav>

//         </Navbar.Collapse>

//       </Navbar>
//     );
//   };

//   export default Navigation;

import React from 'react';
import './Navbar.css';

import { Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const Navigation = () => {
  return (
    <Navbar expand="md" sticky="top">

      <Navbar.Toggle aria-controls="responsive-navbar-nav">
        <FontAwesomeIcon icon={faBars} />
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ml-auto">
          <Nav.Link href="#">Home</Nav.Link>
          <Nav.Link href="#">Info</Nav.Link>
          <Nav.Link href="#">About</Nav.Link>
          <Nav.Link href="#">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Navigation;
