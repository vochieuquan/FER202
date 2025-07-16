import React, { useState } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { Button, Form, Modal } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setUser }) => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [showModal, setShowModal] = useState(false);
  const [loggedInUser, setLoggedInUser] = useState("");

  const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get("http://localhost:3001/UserAccounts");
      const user = res.data.find(
        (u) =>
          u.username === formData.username &&
          u.password === formData.password &&
          u.status === "active"
      );
      if (user) {
        setLoggedInUser(user.username);
        setUser(user); 
        setShowModal(true);
      } else {
        alert("Invalid username or password!");
      }
    } catch (error) {
      console.error("Login error:", error);
    }
  };

  const handleCloseModal = () => {
    setShowModal(false);
    navigate("/laptops"); // chuyển đến trang laptop
  };

  return (
    <>
      <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-5">
        <Form.Group className="mb-3">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
      </Form>

      <Modal show={showModal} onHide={handleCloseModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>Login Success</Modal.Title>
        </Modal.Header>
        <Modal.Body>Welcome, {loggedInUser} login Successful!</Modal.Body>
        <Modal.Footer>
          <Button variant="success" onClick={handleCloseModal}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

LoginForm.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default LoginForm;
