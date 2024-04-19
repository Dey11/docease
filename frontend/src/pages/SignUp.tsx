import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const handleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:3000/api/users/register",
        {
          email,
          password,
          name,
        },
        {
          withCredentials: true,
        }
      );
      console.log("register successful:", response.data);
    } catch (error) {
      console.error("register failed:", error);
    }
  };
  return (
    <div>
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="name"
        placeholder="Name"
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={handleLogin}>Register</button>
    </div>
  );
};

export default SignUp;
