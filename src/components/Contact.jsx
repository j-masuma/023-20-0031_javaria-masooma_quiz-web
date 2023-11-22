import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";
const Contact = () => {
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
    feedback: "",
  });

  function submitInfo() {
    console.log(userInfo);
    alert(`Data of ${userInfo.username} has been submitted`);
  }

  return (
    <div>
      <h1>Feedback Form</h1>
      <div className={"container p-4"}>
        <div className="row">
          <Form.Group
            className=" col col-lg-6 col-md-12 col-sm-12 mb-4"
            controlId="formBasicName"
          >
            <Form.Control
              className="p-4"
              style={{ backgroundColor: "#e5e5e5" }}
              value={userInfo.username}
              onChange={(e) =>
                setUserInfo({ ...userInfo, username: e.target.value })
              }
              type="text"
              placeholder="Enter Name"
            />
          </Form.Group>
          <Form.Group
            className="col col-lg-6 col-md-12 col-sm-12 mb-4"
            controlId="formBasicEmail"
          >
            <Form.Control
              className="p-4"
              style={{ backgroundColor: "#e5e5e5" }}
              value={userInfo.email}
              onChange={(e) =>
                setUserInfo({ ...userInfo, email: e.target.value })
              }
              type="email"
              placeholder="Enter email"
            />
          </Form.Group>
        </div>
        <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            className="p-4"
            style={{ backgroundColor: "#e5e5e5" }}
            value={userInfo.feedback}
            onChange={(e) =>
              setUserInfo({ ...userInfo, feedback: e.target.value })
            }
            as="textarea"
            rows={3}
            placeholder="Enter Feedback"
          />
        </Form.Group>
        <div className="d-flex justify-content-center align-items-center mb-4 ">
          <Button className="p-3" onClick={submitInfo} variant="secondary">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
