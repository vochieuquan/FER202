import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function PizzaHup() {
  return (
    <div>
      {/* Header */}
      <header className="bg-danger text-white text-center py-4">
        <h1 className="display-4">Pizza Húp</h1>
        <p className="lead">Ngon - Nhanh - Rẻ</p>
      </header>

      {/* Nội dung chính */}
      <main className="container my-5">
        <h2 className="mb-4 text-center">Thực Đơn Pizza Húp</h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
          {/* Pizza Item Template */}
          {[
            {
              img: 'images/pizza1.jpg',
              title: 'Pizza Margherita Húp',
              desc: 'Phô mai mozzarella, sốt cà chua tươi',
              price: '159.000đ'
            },
            {
              img: 'images/pizza2.jpg',
              title: 'Pizza Pepperoni Húp',
              desc: 'Pepperoni cay, phô mai mozzarella',
              price: '189.000đ'
            },
            {
              img: 'images/pizza3.jpg',
              title: 'Pizza Rau Củ Húp',
              desc: 'Nấm, ớt chuông, hành tây, cà chua',
              price: '149.000đ'
            },
            {
              img: 'images/pizza4.jpg',
              title: 'Pizza Hải Sản Húp',
              desc: 'Tôm, mực, cua, phô mai mozzarella',
              price: '219.000đ'
            },
            {
              img: 'images/pizza5.jpg',
              title: 'Pizza Thịt Nướng Húp',
              desc: 'Thịt bò nướng, xúc xích, phô mai',
              price: '199.000đ'
            }
          ].map((pizza, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <img src={pizza.img} className="card-img-top" alt={pizza.title} />
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">{pizza.title}</h5>
                  <p className="card-text">{pizza.desc}</p>
                  <div className="mt-auto d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-danger">{pizza.price}</span>
                    <button className="btn btn-primary">Đặt Ngay</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-1">Hotline: 1900 1234</p>
        <p className="mb-0">&copy; 2024 Pizza Húp</p>
      </footer>
    </div>
  );
}
