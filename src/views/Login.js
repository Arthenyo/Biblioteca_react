import React, {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { messagemSucesso, messagemErro } from "../utils/toastr";

export default function Login(){

    const[login, setValues] = useState({})
    let navigate = useNavigate()

    function onChange(ev){
        const{name, value} = ev.target;
        setValues({...login, [name]:value})
    }

    function onSubmit() {
        console.log("Valores ", login);
    
        axios.post('http://localhost:8080/login', login)
          .then(response => {
            localStorage.setItem("user", JSON.stringify(response.data));
            messagemSucesso("Login efetuado com sucesso");
            navigate("/home");
          })
          .catch(erro => messagemErro("Login ou Senha Inválida"));
      }

    return(
    <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <a class="navbar-brand" href="#">
            <img src="logo.png" alt="Logo" height="40"/>
        </a>
    </nav>
    <div class="container mt-5">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <div class="card">
          <div class="card-header">Login</div>
          <div class="card-body">
            <form>
              <div class="form-group">
                <label for="username">Username</label>
                <input data-cy="input-username"
                type="text" 
                class="form-control"
                name="usuario" 
                id="username" 
                onChange={onChange}
                placeholder="Enter username"/>
              </div>
              <div class="form-group">
                <label for="password">Password</label>
                <input data-cy="input-senha"
                type="password" 
                class="form-control" 
                name="senha"
                id="password" 
                onChange={onChange}
                placeholder="Enter password"/>
              </div>
              <button type="button" 
              data-cy="btn-entrar"
              onClick={onSubmit}
              class="btn btn-primary">Login</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  </div>
    )
}