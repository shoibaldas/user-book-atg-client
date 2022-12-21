import React from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { useLoaderData } from "react-router-dom";
import { RiContactsBook2Fill } from "react-icons/ri";
import { Col, Row } from "react-bootstrap";
import Avatar from "react-avatar";
import { MdWork, MdOutlineAttachEmail } from "react-icons/md";
import {
  FcAddressBook,
  FcAbout,
  FcBriefcase,
  FcBusinessContact,
} from "react-icons/fc";

const UserDetails = () => {
  const details = useLoaderData();
  const { firstName, lastName, username, email } = details.profile;
  return (
    <div className="p-4">
      <Card border="success" className="text-center">
        <Card.Header
          className="text-light fs-5 d-flex align-items-center justify-content-center"
          style={{ backgroundColor: "#018847" }}
        >
          <RiContactsBook2Fill></RiContactsBook2Fill>
          <span> User Book</span>
        </Card.Header>
        <Card.Body style={{ height: "500px" }}>
          <Row>
            {/* General Information of users */}
            <Col lg="7">
              <Card.Title className="d-flex justify-content-start">
                <FcAbout className="fs-3 me-2"></FcAbout>General Information
              </Card.Title>
              <Container className="mt-3 mb-4">
                <Row>
                  <Col className="text-start">
                    <h6>First Name</h6>
                    <Card.Text
                      className="p-2 rounded"
                      style={{ backgroundColor: "#f0f0f5", width: "12rem" }}
                    >
                      {firstName}
                    </Card.Text>
                  </Col>
                  <Col className="text-start">
                    <h6>Last Name</h6>
                    <Card.Text
                      className="p-2 rounded"
                      style={{ backgroundColor: "#f0f0f5", width: "12rem" }}
                    >
                      {lastName}
                    </Card.Text>
                  </Col>
                </Row>
                <Row className="mt-2">
                  <Col className="text-start">
                    <h6>@Username</h6>
                    <Card.Text
                      className="p-2 rounded"
                      style={{ backgroundColor: "#f0f0f5", width: "14rem" }}
                    >
                      {username}
                    </Card.Text>
                  </Col>
                </Row>
              </Container>
              <Card.Title className="d-flex align-items-center justify-content-start">
                <FcBriefcase className="fs-3 me-2"></FcBriefcase>Job Title
              </Card.Title>
              <Container className="mb-4">
                <Row>
                  <Col className="text-start">
                    <Card.Text
                      className="p-2 rounded"
                      style={{ backgroundColor: "#f0f0f5", width: "18rem" }}
                    >
                      {details.jobTitle}
                    </Card.Text>
                  </Col>
                </Row>
              </Container>
              <Card.Title className="d-flex align-items-center justify-content-start">
                <FcBusinessContact className="fs-3 me-2"></FcBusinessContact>
                Contact Information
              </Card.Title>
              <Container>
                <Row>
                  <Col className="text-start">
                    <h6>Email</h6>
                    <Card.Text
                      className="p-2 rounded"
                      style={{ backgroundColor: "#f0f0f5", width: "18rem" }}
                    >
                      {email}
                    </Card.Text>
                  </Col>
                </Row>
              </Container>
            </Col>

            {/* User Introduction with short details */}
            <Col
              lg="5"
              className="border-start border-success"
              style={{ height: "465px" }}
            >
              <Avatar
                size="100"
                round={true}
                name={firstName + " " + lastName}
                maxInitials={2}
              />
              <Card.Title>
                {firstName} {lastName}
              </Card.Title>
              <Card.Text className="d-flex align-items-center justify-content-center">
                <FcAddressBook className="fs-4"></FcAddressBook>
                <span className="fw-light fst-italic">{username}</span>
              </Card.Text>
              <Card.Text className="text-black d-flex align-items-center justify-content-center">
                <MdWork></MdWork>
                <span className="mx-2">{details.jobTitle}</span>
              </Card.Text>
              <Card.Text>
                <MdOutlineAttachEmail></MdOutlineAttachEmail>{" "}
                <span>{email}</span>
              </Card.Text>
              <div className="d-flex justify-content-center">
                <Card bg="success" style={{ width: "18rem" }} className="mb-2">
                  <Card.Header className="text-light fst-italic">
                    Bio
                  </Card.Header>
                  <Card.Body>
                    <Card.Text className="text-light fst-italic">
                      "{details.Bio}"
                    </Card.Text>
                  </Card.Body>
                </Card>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </div>
  );
};

export default UserDetails;
