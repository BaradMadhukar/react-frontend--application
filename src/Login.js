import React, { useState } from "react";
import axios from "axios";
import 
import "./Login.css";

function Login({ onLoginSuccess }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);
    axios
      .post("http://localhost:8080/api/auth/login", { email, password })
      .then(() => {
        onLoginSuccess();
        console.log("Login successful");
      })
      .catch(() => alert("Invalid email or password"));
  };

  return (
    <div className="login-form-container">
      <form onSubmit={handleLogin} className="login-form">
        <h2>🔐 Customer Login</h2>
        <div>
          <label>Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
