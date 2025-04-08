import React, { useState } from "react";
import "./StarRating.css";

/*
1. 5-10 stars
2. select stars, if 3 or 4star is selected all the previous stars also needs to be selected
    - stars should be able to keeps track of there position
3. half a star should be selected
    -check to see if mouse pointer is towards right half or left half of the star
 */

function StarRating({ starCount = 5 }) {
  const [starSelected, setStarSelected] = useState();
  const [starHovered, setStarHovered] = useState(0);

  const starId = Array.from({ length: starCount }, (_, index) => index + 1);

  return (
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
  );
}
export default StarRating;
