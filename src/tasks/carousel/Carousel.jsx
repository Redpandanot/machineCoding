import React, { useEffect, useState } from "react";
import "./Carousel.css";

function Carousel({ images }) {
  const [imageId, setImageId] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setImageId((prevId) => {
        return prevId === images.length - 1 ? 0 : prevId + 1;
      });
    }, 3000);

    return () => {
      clearTimeout(timer);
    };
  }, [imageId, images]);

  function handleOnClick(behaviour) {
    if (behaviour === "prev") {
      if (imageId === 0) {
        setImageId(images.length - 1);
      } else {
        setImageId(imageId - 1);
      }
    } else if (behaviour === "next") {
      if (imageId === images.length - 1) {
        setImageId(0);
      } else {
        setImageId(imageId + 1);
      }
    }
  }
  return (
    <div className="carousel-container">
      <div className="images">
        <div className="image-container">
          <img src={images[imageId]} alt="image" />
        </div>
      </div>
      <button className="button-left" onClick={() => handleOnClick("prev")}>
        ←
      </button>
      <button className="button-right" onClick={() => handleOnClick("next")}>
        →
      </button>
      <div className="indicator">
        {images.map((image, key) => (
          <button
            className={`button-indicator ${
              key === imageId && "indicator-selected"
            }`}
            key={key}
            onClick={() => setImageId(key)}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
