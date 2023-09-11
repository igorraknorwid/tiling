import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { ISliderItem } from '../../types/slider';

interface ISlider{
  items:ISliderItem[]
}


const Slider: React.FC<ISlider> = ({items}) => {
     const [turn, setTurn] = useState(1);

     const increase = () => {
      if(turn<=items.length-1)
      setTurn(turn=>turn+1
        )
     }

     const decrease = () => {
      if(turn>1){
        setTurn(turn=>turn-1
          )
      }
     }
    return (
        <section className='bg-[#363333] text-white md:py-10'>
  <div
    className='mx-auto max-w-[1400px] p-[16px] md:px-[60px]  flex flex-col gap-y-2 md:gap-y-6'
  >
     <div>
        <div className='flex gap-x-6 justify-end'>
            <div onClick={decrease} className={`slider-button ${turn===1?"left-disabled":"left-button"}`}></div>
            <div onClick={increase} className={`slider-button ${turn===items.length?"right-disabled":"right-button"}`}></div>
        </div>
        <div>{turn}</div>
     </div>
     </div>
     </section>
    );
  };

  export default Slider