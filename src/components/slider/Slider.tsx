import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

import { ISliderItem } from '../../types/slider';

interface ISlider{
  items:ISliderItem[]
}


const Slider: React.FC<ISlider> = ({items}) => {
     const [turn, setTurn] = useState(1);

     const increase = () => {

     }

     const decrease = () => {
        
     }



 
  
    return (
        <section className='bg-[#363333] text-white md:py-10'>
  <div
    className='mx-auto max-w-[1400px] p-[16px] md:px-[60px]  flex flex-col gap-y-2 md:gap-y-6'
  >
     <div>
        <div className='flex gap-x-6 justify-end'>
            <div className={`slider-button ${turn===1?"left-disabled":"left-button"}`}></div>
            <div className={`slider-button ${turn===items.length-1?"right-disabled":"right-button"}`}></div>
        </div>
        <div></div>
     </div>
     </div>
     </section>
    );
  };

  export default Slider