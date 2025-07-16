import React, { useState } from "react";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  const [user, setUser] = useState(null);

  return (
    <div>
      <h2 className="text-center mt-4">Login</h2>
      <LoginForm setUser={setUser} />
    </div>
  );
};

export default LoginPage;
