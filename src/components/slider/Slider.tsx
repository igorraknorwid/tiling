import React, { useState } from "react";
// import { motion } from "framer-motion";

import { ISliderItem } from "../../types/slider";

interface ISlider {
  items: ISliderItem[];
}

const Slider: React.FC<ISlider> = ({ items }) => {
  const [turn, setTurn] = useState(1);

  const set = (id: number) => {
    setTurn(id);
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
                onClick={() => {
                  set(item.id);
                }}
                key={item.id}
                className={`slide ${item.id === turn ? "active" : ""} relative`}
              >
                <img src={item.src} alt={item.title} />
                {item.id === turn && (
                  <p
                    className={`title absolute bottom-3 right-3 text-2xl text-black font-bold ${
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
