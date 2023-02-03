import axios from "axios";
import swal from "@sweetalert/with-react";
import { useNavigate, Navigate } from "react-router-dom";

import "./Login.css";

export const Login = () => {
  // Redireccion con useNavigate
  const nuevoLink = useNavigate();
  // Funcion de envio de formulario
  const submitHandler = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Validacion de email
    const re =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    // Validacion de campos vacios
    if (email === "" || password === "") {
      swal({
        title: "Campos vacios!",
        text: "Los campos no pueden estar vacios!",
        icon: "error",
        button: "Reintentar",
      });
      return;
    }

    // Validacion de formato de email
    if (email !== "" && !re.test(email)) {
      swal({
        title: "Direccion de email invalida",
        text: "Debes escribir una direccion de correo valida",
        icon: "error",
        button: "Reintentar",
      });
      return;
    }

    // Validacion de informacion
    if (email !== "challenge@alkemy.org" || password !== "react") {
      swal({
        title: "Credenciales invalidas",
        text: "El email o la contraseña son incorrectos",
        icon: "error",
        button: "Reintentar",
      });
      return;
    }

    // Una vez que supera todas las validaciones
    swal({
      title: "Credenciales validas",
      text: "Su login fue optimo",
      icon: "success",
      button: "Oa!",
    });

    axios
      .post("http://challenge-react.alkemy.org", { email, password })
      .then((res) => {
        const tokenReceived = res.data.token;
        localStorage.setItem("token", tokenReceived);
        // Redireccion con useNavigate
        nuevoLink("/listado");
      });
  };
  // Token obtenido del localStorage para luego renderizar el componente o redirigirlo
  let tokenSaved = localStorage.getItem("token");
  return (
    <>
      {tokenSaved && <Navigate to="/listado" />}
      <div className="container my-5 login">
        <h2>Login</h2>
        <hr />
        <form onSubmit={submitHandler}>
          <label>
            <span>Email: </span>
            <br />
            <input type="text" name="email" placeholder="Ingrese su correo" />
          </label>
          <br />
          <label>
            <span>Contraseña: </span>
            <br />
            <input
              type="password"
              name="password"
              placeholder="Ingrese su contraseña"
            />
          </label>
          <br />
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </>
  );
};
