import React from 'react';
import logo from '../../../assets/logo/logo.png'
import Navbar from 'react-bootstrap/Navbar';

const NavBar = () => {
    return (
        <>
        <Navbar bg="dark">
            <div className=" px-3 py-2">
            <Navbar.Brand href="#home">
              <img
                src={logo}
                className="d-inline-block align-top"
                alt="React Bootstrap logo"
              />
            </Navbar.Brand>
            </div>
        </Navbar>
      </>
    );
};

export default NavBar;