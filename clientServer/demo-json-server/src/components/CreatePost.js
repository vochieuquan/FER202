import React, { useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Alert,
  Row,
  Col,
} from "react-bootstrap";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState(null);

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation đơn giản
    if (title.trim() === "" || content.trim() === "") {
      setStatus({ type: "danger", message: "Vui lòng điền đầy đủ thông tin." });
      return;
    }

    const newPost = { title, content };

    try {
      await axios.post("http://localhost:3001/posts", newPost);
      setStatus({ type: "success", message: "Bài viết đã được tạo thành công!" });
      setTitle("");
      setContent("");

      setTimeout(() => navigate("/"), 1000); // chuyển về trang danh sách sau 1 giây
    } catch (error) {
      console.error("Lỗi khi tạo bài viết:", error);
      setStatus({ type: "danger", message: "Có lỗi xảy ra khi tạo bài viết." });
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md={8}>
          <h2>Thêm bài viết mới</h2>

          {status && (
            <Alert variant={status.type}>{status.message}</Alert>
          )}

          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formTitle" className="mb-3">
              <Form.Label>Tiêu đề</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nhập tiêu đề"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formContent" className="mb-3">
              <Form.Label>Nội dung</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Nhập nội dung"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Tạo bài viết
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

// ✅ Optional validation nếu dùng như 1 reusable component
CreatePost.propTypes = {
  title: PropTypes.string,
  content: PropTypes.string,
};

export default CreatePost;
