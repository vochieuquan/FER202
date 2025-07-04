import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Button, Alert, Spinner } from "react-bootstrap";

const PostList = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3001/posts");
        setData(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Lỗi khi lấy dữ liệu:", err);
        setError("Không thể lấy dữ liệu từ server.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <Container className="text-center mt-4">
        <Spinner animation="border" variant="primary" />
        <div>Đang tải...</div>
      </Container>
    );
  }

  if (error) {
    return (
      <Container className="mt-4">
        <Alert variant="danger">{error}</Alert>
      </Container>
    );
  }

  if (data.length === 0) {
    return (
      <Container className="mt-4">
        <Alert variant="info">Không có bài viết nào!</Alert>
        <Button variant="primary" onClick={() => navigate("/create")}>
          Tạo bài viết mới
        </Button>
      </Container>
    );
  }

  return (
    <Container className="mt-4">
      <Row className="mb-3">
        <Col>
          <h2>Danh sách bài viết</h2>
          <Button variant="success" onClick={() => navigate("/create")}>
            + Tạo bài viết mới
          </Button>
        </Col>
      </Row>

      <Row>
        {data.map((post) => (
          <Col key={post.id} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.content}</Card.Text>
                <Button
                  variant="warning"
                  size="sm"
                  className="me-2"
                  onClick={() => navigate(`/edit/${post.id}`)}
                >
                  Chỉnh sửa
                </Button>
                <Button
                  variant="danger"
                  size="sm"
                  onClick={() => navigate(`/delete/${post.id}`)}
                >
                  Xoá
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PostList;
