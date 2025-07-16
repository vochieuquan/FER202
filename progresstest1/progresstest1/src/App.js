import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import LaptopPage from "./pages/LaptopPage";
import LaptopDetailPage from "./pages/LaptopDetailPage";
import NotFoundPage from "./pages/NotFoundPage";


function App() {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            user ? (
              <Navigate to="/laptops" />
            ) : (
              <LoginPage setUser={setUser} />
            )
          }
        />
        <Route path="/laptops" element={<LaptopPage />} />
        <Route path="/laptops/:id" element={<LaptopDetailPage />} /> 
        <Route path="*" element={<NotFoundPage />} /> 


      </Routes>
    </Router>
  );
}

export default App;
