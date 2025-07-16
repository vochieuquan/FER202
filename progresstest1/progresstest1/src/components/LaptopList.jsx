import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const LaptopList = ({ searchTerm }) => {
  const [laptops, setLaptops] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3001/Laptops")
      .then((res) => setLaptops(res.data))
      .catch((err) => console.error("Error fetching laptops:", err));
  }, []);

  const safeSearch = typeof searchTerm === "string" ? searchTerm.toLowerCase() : "";

  const filtered = laptops.filter((lap) =>
    `${lap.brand} ${lap.model}`.toLowerCase().includes(safeSearch)
  );

  return (
    <Row className="mt-4">
      {filtered.length > 0 ? (
        filtered.map((lap) => (
          <Col md={3} key={lap.id} className="mb-4">
            <Card>
              <Card.Img
                variant="top"
                src={lap.image || "https://via.placeholder.com/300"}
                alt={`${lap.brand} ${lap.model}`}
                className="object-fit-cover"
                style={{ height: "300px" }}
              />
              <Card.Body>
                <Card.Title>{lap.brand} - {lap.model}</Card.Title>
                <Card.Text>
                  Year: {lap.year} <br />
                  Price: {lap.price}
                </Card.Text>
                <Link to={`/laptops/${lap.id}`}>
                  <Button variant="primary">View Details</Button>
                </Link>
              </Card.Body>
            </Card>
          </Col>
        ))
      ) : (
        <Col>
          <p className="text-center mt-4">No laptops found.</p>
        </Col>
      )}
    </Row>
  );
};

LaptopList.propTypes = {
  searchTerm: PropTypes.string,
};

export default LaptopList;
