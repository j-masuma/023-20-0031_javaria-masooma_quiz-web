import React, { useState } from "react";
import { Container } from "react-bootstrap";

const Statistics = () => {
  // State to manage the number of users and trusted clients
  const [usersCount, setUsersCount] = useState(1000);
  const [trustedClientsCount, setTrustedClientsCount] = useState(500);

  return (
    <Container>
      <div className="row">
        <h2>Statistics</h2>
        <div className="col col-lg-4 col-md-4 col-sm-4">
          <div>
            <p>Users: {usersCount}</p>
            <button onClick={() => setUsersCount(usersCount + 1)}>
              Increment Users
            </button>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-4">
            <p>Trusted Users: {usersCount}</p>
            <button onClick={() => setUsersCount(usersCount + 1)}>
              Increment Users
            </button>
          </div>
          <div className="col col-lg-4 col-md-4 col-sm-4">
            <p>Downloads: {trustedClientsCount}</p>
            <button
              onClick={() => setTrustedClientsCount(trustedClientsCount + 1)}
            >
              Increment Trusted Clients
            </button>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Statistics;
