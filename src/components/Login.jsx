import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:5001/profile", {
        headers: {
          Authorization: token,
        },
      })
      .then((res) => navigate("/profile"))
      .catch((err) => {
        navigate("/login");
      });
  }, [navigate]);

  const handleLogin = () => {
    axios
      .post("http://localhost:5001/login", { username, password })
      .then((user) => {
        localStorage.setItem("token", user.data.token);
        console.log("user is successfully loin");
        navigate("/profile");
      })
      .catch((error) => {
        console.log(error);
        navigate("/login");
      });
  };
  return (
    <div>
      <h2>This is Login</h2>
      <input
        type="text"
        placeholder="username"
        value={username}
        onChange={(e) => {
          setUsername(e.target.value);
        }}
        required
      />
      <input
        type="password"
        placeholder="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        required
      />
      <button type="submit" onClick={handleLogin}>
        Login
      </button>
    </div>
  );
};

export default Login;
