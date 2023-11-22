import React from "react";
import { Container } from "react-bootstrap";

export const SecurityUpdates = () => {
  return (
    <Container>
      <div>
        <div className="row">
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              padding: "20px",
            }}
          >
            Our Pinpoint Security,
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                padding: "20px",
              }}
            >
              {" "}
              ensure the best usage{" "}
            </h1>
            for the institutes
          </h1>
          <p className="d-flex justify-content-center align-items-center m-4">
            We ensure the best usage for vehicles tracking and reservation
            system security with advance encryption standards and capability of
            keeping your assets like car, points much more secure with the live
            tracking system.
          </p>
        </div>
      </div>
    </Container>
  );
};
