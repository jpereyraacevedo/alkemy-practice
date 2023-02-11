import { useState, useEffect } from "react";
// Components
import { Routes, Route } from "react-router-dom";
import { Footer } from "./components/Footer/Footer";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { Login } from "./components/Login/Login";
import { Detail } from "./components/Detail/Detail";
import { Results } from "./components/Results/Results";
import { Favorites } from "./components/Favorites/Favorites";
// Styles
import "./App.css";
import "./bootstrap.min.css";

function App() {

  const [favorites, setFavorites] = useState([]);

    useEffect(()=> {
       let favsInStorage = localStorage.getItem("favs")

       if(favsInStorage !== null) {
        let favoritesArray = JSON.parse(favsInStorage);
        console.log(favoritesArray)
        setFavorites(favoritesArray)
       }
    },[])


  let favoriteToggle = (e) => {
    // Boton de favoritos
    const favsMovies = localStorage.getItem("favs");
    let favsMoviesTemp;

    if (favsMovies === null) {
      favsMoviesTemp = [];
    } else {
      favsMoviesTemp = JSON.parse(favsMovies);
    }
    const btnActions = e.currentTarget;
    const btnParent = btnActions.parentElement;
    const imgURL = btnParent.querySelector("img").getAttribute("src");
    const parentTitle = btnParent.querySelector("h5").innerText;
    const parentOverview = btnParent.querySelector("p").innerText;

    const movieDataObjet = {
      imgURL,
      parentTitle,
      parentOverview,
      id: btnActions.dataset.movieId,
    };
    //Retorna la pelicula que tenga el id igual al id del objeto guardado en el localStorage
    let movieIsInArray = favsMoviesTemp.find((movie) => {
      return movie.id === movieDataObjet.id;
    });

    //
    if (!movieIsInArray) {
      favsMoviesTemp.push(movieDataObjet);
      localStorage.setItem("favs", JSON.stringify(favsMoviesTemp));
      setFavorites(favsMoviesTemp)
      console.log("Se agrego la pelicula");
    } else {
      let removeMoviesFromFavs = favsMoviesTemp.filter((oneMovie) => {
        return oneMovie.id !== movieDataObjet.id;
      });
      localStorage.setItem("favs", JSON.stringify(removeMoviesFromFavs));
      setFavorites(removeMoviesFromFavs)
      console.log("Se elimino la pelicula");
    }
  };

  return (
    <>
      <div>
        <Header />
        <div className="container">
          <Routes>
            <Route exact path="/" element={<Login />} />
            <Route
              path="/listado"
              element={<List favoriteToggle={favoriteToggle} />}
            />
            <Route path="/detail" element={<Detail />} />
            <Route path="/results" element={<Results />} />
            <Route path="/favorites" element={<Favorites favorites={favorites} favoriteToggle={favoriteToggle} />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default App;
