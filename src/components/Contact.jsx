import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useState } from "react";

function Contact() {
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
    <div style={{ backgroundColor: "#e5e5e5" }}>
      <div className={"container p-4"}>
        <Form.Group className="mb-3" controlId="formBasicName">
          <Form.Control
            value={userInfo.username}
            onChange={(e) =>
              setUserInfo({ ...userInfo, username: e.target.value })
            }
            type="text"
            placeholder="Enter Name"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            value={userInfo.email}
            onChange={(e) =>
              setUserInfo({ ...userInfo, email: e.target.value })
            }
            type="email"
            placeholder="Enter email"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Control
            value={userInfo.feedback}
            onChange={(e) =>
              setUserInfo({ ...userInfo, feedback: e.target.value })
            }
            as="textarea"
            rows={3}
            placeholder="Enter Feedback"
          />
        </Form.Group>
        <Button onClick={submitInfo} variant="secondary">
          Submit
        </Button>
      </div>
    </div>
  );
}

export default Contact;
