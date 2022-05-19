import React from "react";
import { useDispatch } from "react-redux";
import { addMovie } from "../feautures/favListSlice";
import styles from "./MovieListItem.module.css";


export default function MovieItem({ movie, disable }) {
  const dispatch = useDispatch();

  const handleAdd = () => {
    dispatch(
      addMovie({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        poster: movie.Poster
      })
    );
  };

  return (
    <div className={styles.cardFilm}>
      <div className={styles.addAndImg}>
        <button
          type="button"
          className="movie-item__add-button"
          id={styles.favButton}
          disabled={disable}
          onClick={handleAdd}
        >
           Add list
        </button>
      <img className={styles.poster} src={movie.Poster} alt={movie.Title} />
      </div>
      <div className="movie-item__info">

        </div>
        <h3 className="movie-item__title" id={styles.movieTitle}>
          {movie.Title} <span className={styles.movieYear}> {`(${movie.Year})`}</span>
        </h3>
        <p>{disable}</p>
    </div>
  );
}
