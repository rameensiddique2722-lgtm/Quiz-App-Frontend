import { Link } from "react-router-dom";

const Home = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <div>
      <h1>Home Page</h1>

      {!user && <Link to="/login">Login Here</Link>}

      {user && (
        <>
          <p>Welcome, {user.role}</p>
          <span className="nav-user">Hello, {user.email}</span>
        </>
      )}
    </div>
  );
};

export default Home;