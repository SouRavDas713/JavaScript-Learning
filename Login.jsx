import React, { useState } from "react";
import { auth } from "./firebase-config";
import { signInWithEmailAndPassword } from "firebase/auth";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Logged in successfully");
    } catch (error) {
      alert(error.message);
    }
  };

  const formStyle = {
    maxWidth: "400px",
    margin: "50px auto",
    padding: "30px",
    borderRadius: "10px",
    boxShadow: "0 0 15px rgba(0,0,0,0.1)",
    background: "#fff",
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    fontFamily: "Arial, sans-serif",
  };

  const inputStyle = {
    padding: "10px",
    border: "1px solid #ccc",
    borderRadius: "5px",
    fontSize: "16px",
  };

  const buttonStyle = {
    padding: "10px",
    background: "#2196F3",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    fontSize: "16px",
    cursor: "pointer",
  };

  return (
    <form onSubmit={login} style={formStyle}>
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Login</h2>
      <input
        type="email"
        placeholder="Email"
        required
        style={inputStyle}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        required
        style={inputStyle}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit" style={buttonStyle}>
        Login
      </button>
    </form>
  );
}

export default Login;
