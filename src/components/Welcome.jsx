import React from "react";
import Carousel from "react-bootstrap/Carousel";
import bus from "../assets/images/bus-img.png";
import sukkur from "../assets/images/sukkur-img.png";
import getstart from "../assets/images/getstarted.png";
import Button from "react-bootstrap/Button";
import leftIcon from "../assets/images/teenyicons_left-solid.png";
import rightIcon from "../assets/images/teenyicons_right-solid.png";
import Statistics from "./Statistics";
function Welcome() {
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
          <h1>The Fast Pinpoint</h1>
          <h1> Get Started `{"->"}` </h1>
          <h1>Tracking & Reservation.</h1>
        </div>
        <div className="col col-sm-6 col-md-3 col-lg-3 p-4">
          <img src={getstart} alt="Get Started" />
        </div>
      </div>
      <div className="row">
        <p className="p-4">
          Pinpoint is the fastest tracking and reservation software solution for
          personal and enterprise vehicles for institutes, offices and companies
          with live tracking, history recording, estimated arrival time and
          usage report generation and much more features
        </p>
      </div>
      {/* <div className="row mb-4">
        <div className="col col-lg-4 col-md-4 col-sm-4">
          <Button variant="secondary">Secondary</Button>
        </div>
        <div className="col col-lg-4 col-md-4 col-sm-4">
          <Button variant="secondary">Secondary</Button>
        </div>
        <div className="col col-lg-4 col-md-4 col-sm-4">
          <Button variant="secondary">Secondary</Button>
        </div>
      </div> */}
      {<Statistics />}
      <div className="row">
        <h1>
          Pinpoint Security,
          <h1> ensure the best usage </h1>for the institutes
        </h1>
      </div>
      <div className="row">
        <p>
          We ensure the best usage for vehicles tracking and reservation system
          security with advance encryption standards and capability of keeping
          your assets like car, points much more secure with the live tracking
          system.
        </p>
      </div>
      <div className="row">
        <div className="d-flex justify-contet-center align-items-center mb-4">
          <Button variant="secondary">Get Started</Button>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
