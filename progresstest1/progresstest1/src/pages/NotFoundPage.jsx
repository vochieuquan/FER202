import React from "react";
import { Container, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const NotFoundPage = () => {
  const navigate = useNavigate();

  return (
    <Container className="text-center mt-5">
      <h1>404 - Page Not Found</h1>
      <p>The page you're looking for doesn't exist.</p>
      <Button variant="secondary" onClick={() => navigate("/")}>
        Go to Login
      </Button>
    </Container>
  );
};

export default NotFoundPage;
