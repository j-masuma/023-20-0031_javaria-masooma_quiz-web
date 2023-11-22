import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";

const Statistics = () => {
  // State to manage the number of users and trusted clients
  const [usersCount, setUsersCount] = useState(100);
  const [trustedClientsCount, setTrustedClientsCount] = useState(5);
  const [downloads, setDownloads] = useState(10);
  return (
    <Container>
      <div className="row p-4">
        <div className="col col-lg-4 col-md-4 col-sm-4 d-flex justify-content-around align-items-center mb-4 ">
          <Button
            className="m-3 p-3"
            onClick={() => setUsersCount(usersCount + 1)}
            variant="secondary"
          >
            {usersCount} Users
          </Button>
        </div>
        <div className="col col-lg-4 col-md-4 col-sm-4">
          <Button
            className="m-3 p-3"
            onClick={() => setTrustedClientsCount(trustedClientsCount + 1)}
            variant="secondary"
          >
            {trustedClientsCount} Trusted Clients
          </Button>
        </div>
        <div className="col col-lg-4 col-md-4 col-sm-4">
          <Button
            className="m-3 p-3"
            onClick={() => setDownloads(downloads + 1)}
            variant="secondary"
          >
            {downloads} Downloads
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default Statistics;
