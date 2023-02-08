import { useNavigate } from "react-router-dom";
import swal from "@sweetalert/with-react";
import "./SearchBar.css";

export const SearchBar = () => {
  const resultsLink = useNavigate();

  const searchHandler = (e) => {
    e.preventDefault();
    const keyword = e.currentTarget.keyword.value.trim();

    if (keyword.length === 0) {
      swal("EsTA VACI0oOO");
    } else if (keyword.length < 4) {
      swal("Por favor escriba al menos 4 caracteres para mejorar la busqueda");
    } else {
      e.currentTarget.keyword.value = "";
      resultsLink(`/results?keyword=${keyword}`);
    }
  };

  return (
    <>
      <form className="search-button" onSubmit={searchHandler}>
        <label>
          <input type="text" name="keyword" placeholder="Buscar" />
        </label>
        <br />
        <button type="submit">Buscar</button>
      </form>
    </>
  );
};
