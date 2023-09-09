import React from "react";

const FilterGroup = ({ minRating, onRatingClick, rating }) => {
  return (
    <ul className="align_center movie_filter">
      {rating.map((rate) => (
        <li
          className={`movie_filter_item ${minRating === rate ? "active" : ""}`}
          key={rate}
          onClick={() => onRatingClick(rate)}
        >
          {rate}+ Star
        </li>
      ))}
    </ul>
  );
};

export default FilterGroup;
