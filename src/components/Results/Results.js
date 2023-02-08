import { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import swal from "@sweetalert/with-react";
import axios from "axios";
import "./Results.css";

export const Results = () => {
  let query = new URLSearchParams(window.location.search);
  let keywordGetted = query.get("keyword");
  let [movieResults, setMovieResults] = useState([]);
  let [searchParams, setSearchParams] = useSearchParams()

  useEffect(() => {
    let endpoint = `https://api.themoviedb.org/3/search/movie?api_key=9ce05f2e0d08f8557f33f3e3c631c1ed&language=es-MX&page=1&include_adult=false&query=${keywordGetted}`;
    axios
      .get(endpoint)
      .then((res) => {
        const moviesArray = res.data.results;
        if (moviesArray.length === 0) {
            swal(<h2>Su busqueda no condujo a ningun resultado</h2>)
        }
        setMovieResults(moviesArray);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [searchParams]);

  return (
    <>
      <h2 className="my-5">
        Busquedas relacionadas a: <em>{keywordGetted}</em>{" "}
      </h2>
      <div className="row">
        {movieResults.map((movies, key) => {
          return (
            <div className="col-3 my-5 card-style" key={key}>
              <div className="card">
                <img
                  src={`https://image.tmdb.org/t/p/w500${movies.poster_path}`}
                  className="card-img-top"
                  alt="..."
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {movies.title.substring(0, 50)}
                  </h5>
                  <p className="card-text">
                    {movies.overview.substring(0, 250)}...
                  </p>
                  <Link
                    to={`/detail?movieID=${movies.id}`}
                    className="btn btn-primary"
                  >
                    Ir al detalle
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
