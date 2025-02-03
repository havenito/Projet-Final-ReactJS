import { useAuth } from "./AuthProvider";
import { useState } from "react";
import { useNavigate } from "react-router";
import "./LoginOut.scss";

export function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    login(username, password);
    navigate("/");
    window.location.reload();
  };

  return (
    <div className="login-container">
      <div className="login-form">
        <h3 className="login-title">Se connecter</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="username">Nom d'utilisateur</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Mot de passe</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="login-button">Se connecter</button>
        </form>
      </div>
    </div>
  );
}

export function Logout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    window.location.reload();
  };

  return (
    <button onClick={handleLogout} className="logout-button">Se déconnecter</button>
  );
}