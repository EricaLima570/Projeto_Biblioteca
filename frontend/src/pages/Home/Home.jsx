import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../../components/Navbar/Navbar"; // Substitua MainNavbar por Navbar
import Footer from "../../components/Footer/Footer";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home-container">
      <Navbar /> {/* Substitua MainNavbar por Navbar */}
      <div className="home-content">
        <h1>Bem-vindo à BookFlow</h1>
        <div className="home-buttons">
          <button onClick={() => navigate("/duvidas")}>Dúvidas</button>
          <button onClick={() => navigate("/listarinteresses")}>
            Listar Interesses
          </button>
          <button onClick={() => navigate("/perfil")}>Perfil</button>
          <button onClick={() => navigate("/livros")}>Administrar Livros</button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;