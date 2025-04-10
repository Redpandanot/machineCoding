import React, { useState } from "react";
import "./StarRating.css";

function StarRating({ starCount = 5 }) {
  const [newStarCount, setNewStarCount] = useState(starCount);
  const [starSelected, setStarSelected] = useState();
  const [starHovered, setStarHovered] = useState(0);

  const starId = Array.from({ length: newStarCount }, (_, index) => index + 1);

  return (
    <div className="star-container">
      <div className="container">
        {starId.map((starId) => {
          return (
            <div
              key={starId}
              className={`star ${
                starId <= (starHovered || starSelected) ? "starSelected" : ""
              }`}
              onClick={() => setStarSelected(starId)}
              onMouseEnter={() => setStarHovered(starId)}
              onMouseLeave={() => setStarHovered(0)}
            >
              ★
            </div>
          );
        })}
      </div>
      <input
        className="input-box"
        type="number"
        min="1"
        max="15"
        step="1"
        value={newStarCount}
        onChange={(e) =>
          e.target.value > 0 &&
          e.target.value <= 15 &&
          setNewStarCount(e.target.value)
        }
      />
    </div>
  );
}
export default StarRating;
