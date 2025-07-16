import React, { useState } from "react";
import LaptopList from "../components/LaptopList";
import { Form, Button, Container } from "react-bootstrap";

const LaptopPage = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchInput, setSearchInput] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();
    setSearchTerm(searchInput);
  };

  return (
    <Container>
      <h2 className="mt-4 mb-3 text-center">Laptop Management</h2>

      <Form className="d-flex mb-4" onSubmit={handleSearch}>
        <Form.Control
          type="text"
          placeholder="Search by brand or model..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className="me-2"
        />
        <Button variant="secondary" type="submit">Search</Button>
      </Form>

      {/* ✅ Truyền searchTerm đúng vào LaptopList */}
      <LaptopList searchTerm={searchTerm} />
    </Container>
  );
};

export default LaptopPage;
