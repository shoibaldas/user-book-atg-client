import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import SidebarMenu from '../pages/Shared/SidebarMenu/SidebarMenu';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
                <Row style={{margin:'0'}}>
                    <Col md="4" style={{padding:'0'}}>
                        <SidebarMenu></SidebarMenu>
                    </Col>
                    <Col md="8" className='bg-light' style={{padding:'0'}}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
        </div>
    );
};

export default Main;