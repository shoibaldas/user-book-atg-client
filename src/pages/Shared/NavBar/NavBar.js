import React from 'react';
import logo from '../../../assets/logo/logo.png'
import Navbar from 'react-bootstrap/Navbar';
import SearchBar from '../../../components/SearchBar/SearchBar';

const NavBar = () => {

    return (
        <>
        <Navbar bg="dark" className='me-auto'>
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
        {/* <Navbar className="justify-content-end position-relative" style={{padding:'0'}}>
            <SearchBar></SearchBar>
        </Navbar> */}
      </>
    );
};

export default NavBar;