import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import NavBar from '../pages/Shared/NavBar/NavBar';
import SidebarMenu from '../pages/Shared/SidbarMenu/SidebarMenu';

const Main = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Container>
                <Row>
                    <Col lg="5">
                        <SidebarMenu></SidebarMenu>
                    </Col>
                    <Col lg="7">
                        <Outlet></Outlet>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Main;