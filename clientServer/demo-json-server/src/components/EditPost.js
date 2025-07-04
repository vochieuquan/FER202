import React, { useState, useEffect } from "react";
import axios from "axios";
import PropTypes from "prop-types";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Form,
  Button,
  Alert,
  Spinner,
} from "react-bootstrap";

const EditPost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(true);

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`http://localhost:3001/posts/${id}`);
        setTitle(response.data.title);
        setContent(response.data.content);
        setLoading(false);
      } catch (error) {
        console.error("Lỗi khi lấy bài viết:", error);
        setStatus("Không thể lấy dữ liệu bài viết.");
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title || !content) {
      setStatus("Vui lòng nhập đầy đủ tiêu đề và nội dung.");
      return;
    }

    const updatedPost = {
      title,
      content,
    };

    try {
      const response = await axios.put(
        `http://localhost:3001/posts/${id}`,
        updatedPost
      );
      if (response.status === 200) {
        setStatus("Bài viết đã được cập nhật!");
        setTimeout(() => navigate("/"), 1000); // Trả về sau 1s
      }
    } catch (error) {
      console.error("Lỗi khi cập nhật bài viết:", error);
      setStatus("Có lỗi xảy ra khi cập nhật bài viết.");
    }
  };

  if (loading)
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" />
      </Container>
    );

  return (
    <Container className="mt-5" style={{ maxWidth: "600px" }}>
      <h2>Chỉnh sửa bài viết</h2>
      {status && <Alert variant="info">{status}</Alert>}
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formTitle" className="mb-3">
          <Form.Label>Tiêu đề</Form.Label>
          <Form.Control
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Nhập tiêu đề"
          />
        </Form.Group>

        <Form.Group controlId="formContent" className="mb-3">
          <Form.Label>Nội dung</Form.Label>
          <Form.Control
            as="textarea"
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Nhập nội dung"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Cập nhật bài viết
        </Button>
      </Form>
    </Container>
  );
};

EditPost.propTypes = {
  // Nếu bạn dùng EditPost như component con, có thể thêm propTypes ở đây
};

export default EditPost;
