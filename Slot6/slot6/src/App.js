import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container mt-5">
        <h1>Exercise 7: Demo about Card Column</h1>
        <div className="row">
          <div className="col-md-4">
            <div className="card border-primary">
              <img src="/car1.jpg" className="card-img-top custom-img" alt="Car 1" />
              <div className="card-body">
                <p className="card-text">Supra đen</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-warning">
              <img src="/car2.jpg" className="card-img-top custom-img" alt="Car 2" />
              <div className="card-body">
                <p className="card-text">Supra vàng</p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card border-danger">
              <img src="/car3.jpg" className="card-img-top custom-img" alt="Car 3" />
              <div className="card-body">
                <p className="card-text">Supra trắng</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;