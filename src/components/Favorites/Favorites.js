import { useState, useEffect } from "react";
import { Navigate, Link } from "react-router-dom";
import "./Favorites.css"

export const Favorites = ( {favoriteToggle, favorites} ) => {
    
    return (
        <>
            <div className="row">
                <h2>Favoritos</h2>
            {favorites.map((movies, key) => {
                return (
                <div className="col-3 my-5 card-style" key={key}>
                    <div className="card">
                    <img src={movies.imgURL} className="card-img-top" alt="..." />
                    <button className="favorite-btn" onClick={favoriteToggle} data-movie-id={movies.id} >F</button>
                    <div className="card-body">
                        <h5 className="card-title">{movies.parentTitle.substring(0, 20)}</h5>
                        <p className="card-text">
                        {movies.parentOverview.substring(0, 230)}...
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
        </>
    )
}