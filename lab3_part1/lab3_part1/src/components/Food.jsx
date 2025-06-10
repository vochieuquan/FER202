import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import image1 from '../assets/images/menu1.jpg';
import image2 from '../assets/images/menu2.jpg';
import image3 from '../assets/images/menu3.jpg';
import image4 from '../assets/images/menu4.jpg';
import image5 from '../assets/images/menu5.jpg';

function Food() {
  const pizzas = [
    {
      img: image1,
      title: 'Pizza Margherita Húp',
      desc: 'Phô mai mozzarella, sốt cà chua tươi',
      price: '159.000đ',
    },
    {
      img: image2,
      title: 'Pizza Pepperoni Húp',
      desc: 'Pepperoni cay, phô mai mozzarella',
      price: '189.000đ',
    },
    {
      img: image3,
      title: 'Pizza Rau Củ Húp',
      desc: 'Nấm, ớt chuông, hành tây, cà chua',
      price: '149.000đ',
    },
    {
      img: image4,
      title: 'Pizza Hải Sản Húp',
      desc: 'Tôm, mực, cua, phô mai mozzarella',
      price: '219.000đ',
    },
    {
      img: image5,
      title: 'Pizza Thịt Nướng Húp',
      desc: 'Thịt bò nướng, xúc xích, phô mai',
      price: '199.000đ',
    },
  ];

  return (
    <div>
           <main className="container-fluid my-5 px-0">
        <h2 className="mb-4 text-center">Thực Đơn Pizza Húp</h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 mx-0">
          {pizzas.map((pizza, index) => (
            <div className="col" key={index}>
              <div className="card h-100">
                <img src={pizza.img} className="card-img-top" alt={pizza.title} style={{ height: '500px', objectFit: 'cover' }} />
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

      <footer className="bg-dark text-white text-center py-4 mt-5">
        <p className="mb-1">Hotline: 1900 1234</p>
        <p className="mb-0">© 2025 Pizza Húp</p>
      </footer>
    </div>
  );
}

export default Food;