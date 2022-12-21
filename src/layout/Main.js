import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import SidebarMenu from '../pages/Shared/SidbarMenu/SidebarMenu';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
                <Row style={{margin:'0'}}>
                    <Col lg="3" style={{padding:'0'}}>
                        <SidebarMenu></SidebarMenu>
                    </Col>
                    <Col lg="9" style={{padding:'0'}}>
                        <Outlet></Outlet>
                    </Col>
                </Row>
        </div>
    );
};

export default Main;