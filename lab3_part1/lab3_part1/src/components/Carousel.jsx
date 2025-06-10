import '../css/carousel.css'; // Đảm bảo đường dẫn đúng
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import image1 from '../assets/images/pizza1.jpg';
import image2 from '../assets/images/pizza2.png';
import image3 from '../assets/images/pizza3.jpg';
import image4 from '../assets/images/pizza4.jpg';
import image5 from '../assets/images/pizza5.jpg';
import React from 'react';

function Carousel() {
  return (
    <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src={image1}
            className="d-block w-100"
            style={{ height: '400px', objectFit: 'cover' }}
            alt="Neapolitan Pizza 1"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Neapolitan Pizza</h5>
            <p>
              If you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={image2}
            className="d-block w-100"
            style={{ height: '400px', objectFit: 'cover' }}
            alt="Neapolitan Pizza 2"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Neapolitan Pizza</h5>
            <p>
              If you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={image3}
            className="d-block w-100"
            style={{ height: '400px', objectFit: 'cover' }}
            alt="Neapolitan Pizza 3"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Neapolitan Pizza</h5>
            <p>
              If you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={image4}
            className="d-block w-100"
            style={{ height: '400px', objectFit: 'cover' }}
            alt="Neapolitan Pizza 4"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Neapolitan Pizza</h5>
            <p>
              If you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src={image5}
            className="d-block w-100"
            style={{ height: '400px', objectFit: 'cover' }}
            alt="Neapolitan Pizza 5"
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Neapolitan Pizza</h5>
            <p>
              If you are looking for a traditional Italian pizza, the Neapolitan
              is the best option
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

export default Carousel;