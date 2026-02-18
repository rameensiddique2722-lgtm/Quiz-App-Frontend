import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Css/Register.css"; // Import CSS

const RegisterForm = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("user");

  const handleRegister = async () => {
    try {
      await axios.post("http://localhost:5000/api/register", {
        email: email.toLowerCase(),
        password,
        role: role.toLowerCase()
      });
      console.log("Selected role:", role);
      alert("User registered! Please login.");
      navigate("/login");
    } catch (err) {
      alert(err.response?.data?.message || "Registration failed");
    }
  };

  return (
    <div className="register-container">
      <h2>Register</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      
<select value={role} onChange={e => setRole(e.target.value)}>
  <option value="user">User</option>
   <option value="admin">Admin</option>
</select>
      <button onClick={handleRegister}>Register</button>
      <p>
        Already have an account? <a href="/login">Login here</a>
      </p>
    </div>
  );
};

export default RegisterForm;