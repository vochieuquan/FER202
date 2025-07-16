import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = () => {
  const { id } = useParams();
  const [album, setAlbum] = useState(null);
  const [error, setError] = useState('');

  useEffect(() => {
    axios.get(`http://localhost:3001/products/${id}`)
      .then(res => {
        setAlbum(res.data);
      })
      .catch(() => {
        setError('Không tìm thấy album');
      });
  }, [id]);

  if (error) return <div className="alert alert-danger m-4 text-center">{error}</div>;
  if (!album) return <div className="text-center mt-5">Đang tải...</div>;

  return (
    <div className="container py-5">
      <div className="mb-4">
        <Link to="/" className="btn btn-outline-dark">Back</Link>
      </div>

      <div className="text-center mb-5">
        <img
          src={`/${album.image}`}
          alt={album.name}
          className="img-fluid rounded mb-3"
          style={{ maxHeight: '320px', objectFit: 'cover' }}
        />
        <div>
          <Link to={`/products/${album.id}/edit`} className="btn btn-outline-secondary">
            Edit Album
          </Link>
        </div>
      </div>

      <div className="card shadow p-4">
        <h2 className="text-center mb-4">{album.name}</h2>
        <p className="text-muted text-center" style={{ fontSize: '1.1rem', lineHeight: '1.8' }}>
          {album.description}
        </p>
        <h4 className="text-center mt-4">
          <span className="text-muted"><strike>{album.price}</strike></span>
          <span className="mx-2">/</span>
          <span className="text-success fw-bold">{album.currentPrice}</span>
        </h4>
      </div>
    </div>
  );
};

export default ProductDetail;
