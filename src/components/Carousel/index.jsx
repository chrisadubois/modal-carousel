import { useState } from "react";
import { extractImageSrc } from "../../data/fetch";

const Carousel = ({ content }) => {
  const [size, setSize] = useState(content.length);
  const [index, setIndex] = useState(0);

  const move = (direction) => {
    const value = index + direction;
    if (value >= size) {
      setIndex(0);
    } else if (value < 0) {
      setIndex(size - 1);
    } else {
      setIndex(value);
    }
  };

  return (
    <>
      <div class="carousel">
        <div class="carousel--content">
          <img
            alt="random"
            src={`${extractImageSrc(content[index])}`}
            style={{ "max-width": "100%", "max-height": "100%" }}
          ></img>
        </div>
      </div>
      <div class="indicators">
        <button onClick={() => move(-1)} class="btn btn--left">
          left
        </button>
        <span>
          current: {index + 1} | total: {size}
        </span>
        <button onClick={() => move(1)} class="btn btn--right">
          right
        </button>
      </div>
    </>
  );
};

export default Carousel;
