import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Card, Button, Spinner } from "react-bootstrap";

const LaptopDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [laptop, setLaptop] = useState(null);
  const [loading, setLoading] = useState(true);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios
      .get(`http://localhost:3001/Laptops/${id}`)
      .then((res) => {
        if (res.data) {
          setLaptop(res.data);
        } else {
          setNotFound(true);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Laptop not found", err);
        setNotFound(true);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <Container className="text-center mt-5">
        <Spinner animation="border" />
      </Container>
    );
  }

  if (notFound || !laptop) {
    return (
      <Container className="text-center mt-5">
        <h3>404 - Laptop Not Found</h3>
        <Button onClick={() => navigate("/laptops")} variant="secondary" className="mt-3">
          Back to Laptop List
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <Card className="mx-auto" style={{ maxWidth: "600px" }}>
        <Card.Img
          variant="top"
          src={laptop.image || "https://via.placeholder.com/600"}
          alt={`${laptop.brand} ${laptop.model}`}
        />
        <Card.Body>
          <Card.Title>{laptop.brand} - {laptop.model}</Card.Title>
          <Card.Text>
            <strong>Year:</strong> {laptop.year} <br />
            <strong>Price:</strong> {laptop.price}
          </Card.Text>
          <Button variant="secondary" onClick={() => navigate("/laptops")}>
            Back to List
          </Button>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default LaptopDetailPage;
