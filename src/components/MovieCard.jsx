import React from "react";
import "./MovieCard.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const MovieCard = ({ movie }) => {
  return (
    <div className="moviecard">
      <div className="star">
        <p className="starrating">{Math.round(movie.vote_average)}</p>
        <FontAwesomeIcon icon={faStar} />
      </div>

      <div className="titlecont">
        <main>
          <h3>{movie.title}</h3>
          <div className="datelanggrid">
            <p>{movie.original_language}</p>
            <p>{movie.release_date.slice(0, 4)}</p>
          </div>
        </main>
      </div>
      <img
        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
        alt="Movie Poster"
      />

      <p>{movie.overview.slice(0, 100) + "..."}</p>
    </div>
  );
};

export default MovieCard;
