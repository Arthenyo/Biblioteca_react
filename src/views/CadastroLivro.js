import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const CadastroLivro = () => {
  const { id } = useParams(); 
  const navigate = useNavigate(); 

  const [livro, setLivro] = useState({
    nome: "",
    isbn: ""
  });

  useEffect(() => {
    if (id) {
      carregarLivro();
    }
  }, [id]);

  const carregarLivro = async () => {
    try {
      const response = await axios.get(`http://localhost:8080/livro/${id}`); 
      setLivro(response.data);
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao carregar as informações do livro. Por favor, tente novamente.");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if (id) {
        await axios.put(`http://localhost:8080/livro/${id}`, livro);
        alert("Livro atualizado com sucesso!");
      } else {
        await axios.post("http://localhost:8080/livro", livro); 
        alert("Livro cadastrado com sucesso!");
      }
      navigate("/livros");
    } catch (error) {
      console.error(error);
      alert("Ocorreu um erro ao salvar o livro. Por favor, tente novamente.");
    }
  };

  const handleChange = (event) => {
    setLivro({
      ...livro,
      [event.target.name]: event.target.value
    });
  };

  return (
    <div>
      <h1>Cadastro de Livro</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nome">Nome:</label>
          <input
            type="text"
            className="form-control"
            id="nome"
            name="nome"
            value={livro.nome}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="isbn">ISBN:</label>
          <input
            type="text"
            className="form-control"
            id="isbn"
            name="isbn"
            value={livro.isbn}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">
          {id ? "Atualizar Livro" : "Cadastrar Livro"}
        </button>
      </form>
    </div>
  );
};

export default CadastroLivro;
