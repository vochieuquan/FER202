import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts, addProduct, deleteProduct } from '../redux/productSlice';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductListRedux = () => {
  const dispatch = useDispatch();
  const { items: products, status, error } = useSelector((state) => state.product);

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: ''
  });

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchProducts());
    }
  }, [dispatch, status]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAddProduct = () => {
    const newProduct = { ...form };
    dispatch(addProduct(newProduct));
    setForm({
      name: '',
      description: '',
      price: '',
      currentPrice: '',
      image: ''
    });
  };

  const handleDelete = (id) => {
    dispatch(deleteProduct(id));
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4 text-center">Danh sách Album (Redux)</h2>
      <hr className="my-4" />

      {status === 'loading' && <div className="text-center">Đang tải dữ liệu...</div>}
      {error && <div className="alert alert-danger text-center">{error}</div>}

      <div className="row">
        {products.map((product) => (
          <div className="col-md-4 mb-4" key={product.id}>
            <div className="card h-100 shadow-sm">
              <img
                src={`/${product.image}`}
                alt={product.name}
                className="card-img-top"
                style={{ height: '400px', objectFit: 'cover' }}
              />
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted" style={{ fontSize: '0.95rem' }}>
                </p>
                <p>
                  <strike>{product.price}</strike> → <b>{product.currentPrice}</b>
                </p>
                <div className="d-grid gap-2 mt-auto">
                  <Link to={`/products/${product.id}`} className="btn btn-outline-dark">
                    View Details
                  </Link>
                  <Link to={`/products/${product.id}/edit`} className="btn btn-outline-secondary">
                    Edit Album
                  </Link>
                  <button
                    className="btn btn-outline-danger"
                    onClick={() => handleDelete(product.id)}
                  >
                    Xóa album
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="my-5" />
      <h3>Thêm album mới</h3>

      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label className="form-label">Tên album</label>
            <input
              name="name"
              className="form-control"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Mô tả</label>
            <textarea
              name="description"
              className="form-control"
              rows="3"
              value={form.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="mb-3">
            <label className="form-label">Giá gốc</label>
            <input
              name="price"
              className="form-control"
              value={form.price}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Giá hiện tại</label>
            <input
              name="currentPrice"
              className="form-control"
              value={form.currentPrice}
              onChange={handleChange}
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Tên file ảnh (VD: utopia-travis.jpg)</label>
            <input
              name="image"
              className="form-control"
              value={form.image}
              onChange={handleChange}
            />
          </div>
          <button className="btn btn-dark w-100" onClick={handleAddProduct}>
            Thêm album
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListRedux;
