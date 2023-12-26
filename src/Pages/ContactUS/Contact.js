import React, { useState } from "react";
import classes from "./Contact.module.css";
import { Form, Button } from "react-bootstrap";

const Contact = () => {
  const [userInput, setUserInput] = useState({
    name: "",
    email: "",
    number: "",
  });
  async function submitHandler(e) {
    e.preventDefault();
    const response = await fetch(
      "https://fir-project-b7f8c-default-rtdb.firebaseio.com/Contact-Details.json",
      {
        method: "POST",
        body: JSON.stringify(userInput),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();
    console.log(userInput, data);
  }
  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setUserInput((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <section className={classes.container}>
      <div className={classes.text}>
        <h1>Contact us</h1>
        <p>
          Need to get in touch with us? Fill out the form and we will respond to
          it asap.
        </p>
      </div>
      <div className={classes.form}>
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name:</Form.Label>
            <Form.Control
              type="text"
              name="name"
              placeholder="Enter Name"
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Enter email"
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNum">
            <Form.Label>Phone No.:</Form.Label>
            <Form.Control
              type="number"
              name="number"
              placeholder="Enter Phone number"
              onChange={onChangeHandler}
            />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </section>
  );
};

export default Contact;
