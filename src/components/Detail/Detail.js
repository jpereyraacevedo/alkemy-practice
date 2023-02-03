import { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";
import swal from "@sweetalert/with-react";
import "./Detail.css";

export const Detail = () => {
  let tokenSaved = localStorage.getItem("token");

  let [movie, setMovie] = useState(null);

  let query = new URLSearchParams(window.location.search);
  let movieID = query.get("movieID");
  useEffect(() => {
    let endpoint = `https://api.themoviedb.org/3/movie/${movieID}?api_key=9ce05f2e0d08f8557f33f3e3c631c1ed&language=es-MX`;
    axios
      .get(endpoint)
      .then((res) => {
        let movieData = res.data;
        setMovie(movieData);
      })
      .catch((err) => {
        swal(<h1>Intente nuevamente</h1>);
      });
  }, [movieID]);
  return (
    <div>
      {!tokenSaved && <Navigate to="/" />}
      {!movie && <h2>Cargando ...</h2>}
      {movie && (
        <div className="container py-5">
          <h1> { movie.title } </h1>
          <img src= { `https://image.tmdb.org/t/p/w500${movie.poster_path }`} />
        </div>
      )}
    </div>
  );
};
