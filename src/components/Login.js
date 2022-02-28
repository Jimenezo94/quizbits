import React, { useState, useRef } from "react";
import { urlR } from "../helpers/url";
import axios from "axios";
import { Link } from "react-router-dom";
import '../styles/login.css'

//const usuario = {}

const Login = () => {
  const [login, setLogin] = useState({
    id: "",
    correo: "",
    contraseña: "",
  });

  const { id, contraseña, correo } = login;
  const form = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current); //ref a los valores del form al inicio sesion
    const data = {
      email: formData.get("email"),
      password: formData.get("password"),
    };

    const res = await axios.get(urlR);

    const resultado = res.data.find((usuario) => usuario.correo === data.email);
    console.log(resultado);
    //usuario=resultado

    if (resultado.contraseña === data.password) {
      setLogin({
        id: resultado.id,
        correo: resultado.correo,
        contraseña: resultado.contraseña,
      });
      window.location = "/home";

      localStorage.setItem("usuario", JSON.stringify(resultado));
    }

    // { answer: 42 }
  };

  return (
    <div className="login">
      <h3>Iniciar sesion</h3>
      <div className="container">
        <form action="/" className="form" ref={form}>
         <label>Correo electronico</label>
          <input
            type="text"
            name="email"
            placeholder="pepito@gmail.com"></input>
         <label>Contraseña</label>
          
          <input type="password" name="password" placeholder="*****"></input>
        <div className='btn'>
          <button className="button" onClick={handleSubmit}>
            Login
          </button>
        </div>

        </form>

        <p> ¿Aún no tienes una cuenta? </p> 

        <Link as={Link} to="/register" href="#register">
         Registrase
             
        </Link>{" "}
      </div>
    </div>
  );
};

export default Login;
