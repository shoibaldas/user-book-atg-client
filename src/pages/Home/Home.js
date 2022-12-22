import React from "react";
import { useLoaderData } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { HiOutlineUserGroup } from "react-icons/hi";

const Home = () => {
  const user = useLoaderData();
  return (
    <div
      className="d-flex justify-content-start ms-5"
     
    >
      <Card className="mt-5 rounded position-relative" style={{ width: "18rem" }}>
        {/* <Card.Header>Header</Card.Header> */}
        <Card.Body className="" style={{ backgroundColor: "#018847" }}>
          <Card.Title className="text-light">Total User:</Card.Title>
          <div>
            <h1 className="text-light">{user.length ? user.length: "No data to show"}</h1>
            <div className="position-absolute" style={{ right: "1rem", bottom:'.7rem' }}>
              <HiOutlineUserGroup
                className="text-warning"
                style={{ fontSize: "3rem" }}
              ></HiOutlineUserGroup>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Home;
