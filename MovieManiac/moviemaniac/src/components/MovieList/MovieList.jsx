import React from "react";
import "./MovieList.css";
import Fire from "../../assets/fire.png";

const MovieList = () => {
  return (
    <section className="movie-list">
      <header className="movie-list__header">
        <h2 className="movie_list_heading">
          Popular <img src={Fire} alt="fire emoji" className="navbar_emoji" />
        </h2>

        <div className="movie-list_fs">
          <ul className="movie_filter">
            <li className="movie_filter_item">8+ Star</li>
            <li className="movie_filter_item">7+ Star</li>
            <li className="movie_filter_item">6+ Star</li>
          </ul>

          <select name="" id="" className="movie_sorting">
            <options>SortBy</options>
            <options>Date</options>
            <options>Rating</options>
          </select>
          <select name="" id="" className="movie_sorting">
            <options>Ascending</options>
            <options>Descending></options>
          </select>
        </div>
      </header>
    </section>
  );
};

export default MovieList;
