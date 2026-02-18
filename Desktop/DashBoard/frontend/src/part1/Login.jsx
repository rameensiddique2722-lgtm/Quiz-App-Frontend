import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../Css/Login.css";  // Import CSS

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/api/login", { email, password });
      localStorage.setItem("token", res.data.token);
localStorage.setItem("role", res.data.role);
localStorage.setItem("user", JSON.stringify(res.data.user));
console.log("FULL RESPONSE:", res.data);
if (res.data.role === "admin") {
  navigate("/admin");
} else {
  navigate("/dashboard");
}
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <input placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} />
      <input placeholder="Password" type="password" value={password} onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
      <p>
        Don't have an account? <a href="/register">Register here</a>
      </p>
    </div>
  );
};

export default Login;