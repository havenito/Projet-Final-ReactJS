import "./Home.scss";
import Hero from "../components/Hero/Hero";
import Intro from "../components/Intro/Intro";
import SearchBar from "../components/SearchBar/SearchBar";
import { useAuth } from "../auth/AuthProvider";

export default function Home() {
  const { user } = useAuth();

  return (
    <div className="home-container">
      <Hero />
      <Intro />
    </div>
  );
}