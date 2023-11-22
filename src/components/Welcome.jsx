import React, { useState } from "react";
import Carousel from "react-bootstrap/Carousel";
import bus from "../assets/images/bus-img.png";
import sukkur from "../assets/images/sukkur-img.png";
import getstart from "../assets/images/getstarted.png";
import Button from "react-bootstrap/Button";
import leftIcon from "../assets/images/teenyicons_left-solid.png";
import rightIcon from "../assets/images/teenyicons_right-solid.png";
import Statistics from "./Statistics";
import Contact from "./Contact";
import { SecurityUpdates } from "./SecurityUpdates";
function Welcome() {
  const [showContactForm, setShowContactForm] = useState(false);

  const handleButtonClick = () => {
    setShowContactForm(true);
  };
  return (
    <div className="container p-t-0">
      <div className="row">
        <Carousel
          data-bs-theme="dark"
          prevIcon={<img src={leftIcon} alt="Previous" />}
          nextIcon={<img src={rightIcon} alt="Next" />}
        >
          <Carousel.Item>
            <img
              className="d-block w-100 pt-0 p-4 m-4"
              src={bus}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100 p-4 m-4"
              src={sukkur}
              alt="Second slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="row">
        <div className="col col-sm-6 col-md-9 col-lg-9">
          <h1
            style={{
              fontSize: "2.5rem",
              fontWeight: "bold",
              padding: "20px",
            }}
          >
            The Fast Pinpoint
            <h1
              style={{
                fontSize: "2.5rem",
                fontWeight: "bold",
                padding: "20px",
                color: "red",
              }}
            >
              {" "}
              Get Started `{"->"}`{" "}
            </h1>
            Tracking & Reservation.
          </h1>
        </div>
        <div className="col col-sm-6 col-md-3 col-lg-3 p-4">
          <img src={getstart} alt="Get Started" />
        </div>
      </div>
      <div className="row">
        <p className="d-flex justify-content-center align-items-center m-4">
          Pinpoint is the fastest tracking and reservation software solution for
          personal and enterprise vehicles for institutes, offices and companies
          with live tracking, history recording, estimated arrival time and
          usage report generation and much more features
        </p>
      </div>

      {<Statistics />}

      <SecurityUpdates />
      <div className="row">
        {showContactForm ? (
          <div>
            <Contact />
          </div>
        ) : (
          <div className="d-flex justify-content-center align-items-center mb-4">
            <Button
              className="p-4"
              onClick={handleButtonClick}
              variant="secondary"
            >
              Get Started
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Welcome;
