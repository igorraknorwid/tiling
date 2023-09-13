import React, { useState } from "react";
// import { motion } from "framer-motion";

import { ISliderItem } from "../../types/slider";
import LazySliderImage from "./LazySliderImage";

interface ISlider {
  items: ISliderItem[];
}

const Slider: React.FC<ISlider> = ({ items }) => {
  const [turn, setTurn] = useState(1);

  const set = (id: number, e: React.MouseEvent<HTMLLIElement>) => {
    if (id === turn) {
      // Get the horizontal position of the click within the slide
      const clickX = e.nativeEvent.clientX;

      // Get the bounding box of the slide element
      const slideBoundingBox = e.currentTarget.getBoundingClientRect();

      // Calculate the midpoint of the slide
      const slideMidpoint = slideBoundingBox.left + slideBoundingBox.width / 2;

      // Determine whether the click was on the left or right side of the slide
      if (clickX < slideMidpoint) {
        if (id > 1) {
          setTurn((turn) => turn - 1);
        }
      } else {
        if (turn <= items.length - 1) setTurn((turn) => turn + 1);
      }
    } else {
      setTurn(id);
    }
  };

  const increase = () => {
    if (turn <= items.length - 1) setTurn((turn) => turn + 1);
  };

  const decrease = () => {
    if (turn > 1) {
      setTurn((turn) => turn - 1);
    }
  };
  return (
    <section className='bg-[#363333] text-white '>
      <div>
        <div className='flex gap-x-6 justify-end pb-5'>
          <div
            onClick={decrease}
            className={`slider-button ${
              turn === 1 ? "left-disabled" : "left-button"
            }`}
          ></div>
          <div
            onClick={increase}
            className={`slider-button ${
              turn === items.length ? "right-disabled" : "right-button"
            }`}
          ></div>
        </div>
        <div>
          <ul className='slider'>
            {items.map((item) => (
              <li
                onClick={(e) => {
                  set(item.id, e);
                }}
                key={item.id}
                className={`slide ${item.id === turn ? "active" : ""} relative`}
              >
                <LazySliderImage title={"slider image"} src={item.src} />
                {/* <img src={item.src} alt={item.title} /> */}

                {item.id === turn && (
                  <p
                    className={`text-[#B86300] bg-[#363333]/80 py-1 px-4 rounded-md  title absolute bottom-3 right-3 md:text-2xl  font-thin ${
                      item.id === turn ? "active" : ""
                    } `}
                  >
                    {item.title}
                  </p>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Slider;
