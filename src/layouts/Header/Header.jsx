import "./Header.scss";
import { Link, useNavigate } from "react-router";
import { useAuth } from "../../auth/AuthProvider";
import logo from "../../../public/logo.png"; // Assurez-vous que le chemin vers le logo est correct

export default function Header() {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
    window.location.reload();
  };

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/" className="header__logo">
          <img src={logo} alt="Logo Lol" className="header__logo-image" />
        </Link>
        <nav className="header__nav">
          <Link to="/search" className="header__nav-link">Recherche</Link>
          <Link to="/contact" className="header__nav-link">Contact</Link>
          {user ? (
            <button onClick={handleLogout} className="header__nav-button">Déconnexion</button>
          ) : (
            <Link to="/loginout-page" className="header__nav-link">Connexion</Link>
          )}
        </nav>
      </div>
    </header>
  );
}