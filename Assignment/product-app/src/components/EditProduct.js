import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`)
      .then(res => setForm(res.data))
      .catch(() => alert('Không tìm thấy album'));
  }, [id]);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    axios.put(`http://localhost:3001/products/${id}`, form)
      .then(() => {
        alert("Album đã được cập nhật");
        navigate(`/products/${id}`);
      })
      .catch(() => alert("Lỗi khi cập nhật album"));
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">
          <h3 className="card-title mb-4 text-center">Edit Album</h3>

          <div className="mb-3">
            <label className="form-label">Album Name</label>
            <input
              className="form-control"
              name="name"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Description</label>
            <textarea
              className="form-control"
              name="description"
              value={form.description}
              onChange={handleChange}
              rows={3}
            ></textarea>
          </div>

          <div className="mb-3">
            <label className="form-label">Original Price</label>
            <input
              className="form-control"
              name="price"
              value={form.price}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Current Price</label>
            <input
              className="form-control"
              name="currentPrice"
              value={form.currentPrice}
              onChange={handleChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label">Image File (e.g., travis-utopia.jpg)</label>
            <input
              className="form-control"
              name="image"
              value={form.image}
              onChange={handleChange}
            />
          </div>

          <button onClick={handleSubmit} className="btn btn-dark w-100">
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
