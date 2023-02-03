import { useEffect, useState } from "react";
import { Navigate, Link } from "react-router-dom";
import swal from "@sweetalert/with-react";
import axios from "axios";
import "./List.css"

export const List = () => {
  let tokenSaved = localStorage.getItem("token");
  const [moviesList, setMoviesList] = useState([]);

  useEffect(() => {
    let endpoint =
      "https://api.themoviedb.org/3/discover/movie?api_key=9ce05f2e0d08f8557f33f3e3c631c1ed&language=es-MX";
    axios
    .get(endpoint)
    .then((res) => {
      let APIdata = res.data.results;
      setMoviesList(APIdata);
    })
    .catch(err=> {
      swal(<h1>Intente nuevamente</h1>)
      console.log(err)
    });
  }, [setMoviesList]);

  return (
    <>
      {!tokenSaved && <Navigate to="/" />}
      <div className="container my-5">
        <h2>Listado cargado</h2>
        <hr />
        <div className="row">
          {moviesList.map((movies, key) => {
            return (
              <div className="col-3 my-5 card-style" key={key}>
                <div className="card">
                  <img src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`} className="card-img-top" alt="..." />
                  <div className="card-body">
                    <h5 className="card-title">{movies.title.substring(0, 50)}</h5>
                    <p className="card-text">
                      {movies.overview.substring(0, 250)}...
                    </p>
                    <Link to={`/detail?movieID=${movies.id}`} className="btn btn-primary">
                      Ir al detalle
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
