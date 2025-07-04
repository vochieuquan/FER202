import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import {
  Container,
  Button,
  Modal,
  Spinner,
  Alert,
} from "react-bootstrap";

const DeletePost = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [post, setPost] = useState(null);
  const [showConfirm, setShowConfirm] = useState(true); // Hiện modal xác nhận
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    // Lấy thông tin bài viết để hiển thị
    axios
      .get(`http://localhost:3001/posts/${id}`)
      .then((res) => {
        setPost(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError("Không thể lấy thông tin bài viết.");
        setLoading(false);
      });
  }, [id]);

  const handleDelete = async () => {
    try {
      await axios.delete(`http://localhost:3001/posts/${id}`);
      setShowConfirm(false);
      navigate("/"); // Quay lại trang danh sách
    } catch (err) {
      console.error("Lỗi khi xóa bài viết:", err);
      setError("Xóa bài viết thất bại.");
    }
  };

  const handleClose = () => {
    setShowConfirm(false);
    navigate("/");
  };

  if (loading)
    return (
      <Container className="mt-5 text-center">
        <Spinner animation="border" />
      </Container>
    );

  return (
    <Container className="mt-5">
      {error && <Alert variant="danger">{error}</Alert>}

      {post && (
        <Modal show={showConfirm} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Xác nhận xóa</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            Bạn có chắc chắn muốn xóa bài viết{" "}
            <strong>"{post.title}"</strong>?
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Hủy
            </Button>
            <Button variant="danger" onClick={handleDelete}>
              Xóa
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
};

export default DeletePost;
