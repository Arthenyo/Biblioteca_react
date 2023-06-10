import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [user, setUser] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const usuarioLogado = JSON.parse(localStorage.getItem("user"));
    if (usuarioLogado) {
      setUser(usuarioLogado);
    } else {
      navigate("/login"); 
    }
  }, [navigate]);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="#">
          Biblioteca Fafic
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <button data-cy="btn-home" className="nav-link" onClick={() => navigate("/")}>
                Home
              </button>
            </li>
            <li className="nav-item">
            <button data-cy="btn-livros" className="nav-link" onClick={() => navigate("/Livros")}>
                Livros
              </button>
            </li>
            <li className="nav-item">
              <a data-cy="btn-usuarios" className="nav-link" href="#">
                Usuarios
              </a>
            </li>
            <li className="nav-item">
              <a data-cy="btn-emprestimo" className="nav-link" href="#">
                Emprestimo
              </a>
            </li>
            <li className="nav-item">
              <a data-cy="btn-devolucao" className="nav-link" href="#">
                Devolução
              </a>
            </li>
            <li className="nav-item">
            <button data-cy="btn-sair" className="nav-link" onClick={() => navigate("/")}>
                Sair
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <h1>Seja Bem Vindo {user.nome}</h1>
    </>
  );
};

export default Home;

