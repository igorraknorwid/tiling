import React, { FC } from 'react';

interface Props {
    title:string;
    location:string;
    className:string

}


const LazyProjectBackground: FC<Props> = ({title,location,className}) => {
  const [isIntersected, setIsIntersected] = React.useState("")
  const topRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const topObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsIntersected(className)
      }
    });
   
    if (topRef.current) {   
      topObserver.observe(topRef.current);
    }
   
    return () => {
      topObserver.disconnect();
    
    };
  }, []);

  return  ( 
  <div ref={topRef} className={`h-[300px] md:h-[600px] ${isIntersected} rounded-xl p-5 flex justify-end items-end`}>
    <div className='m-4'>
    <div className='md:text-3xl font-bold text-xl text-black'>{title}</div>
    <div className='md:text-3xl font-bold mt-1 text-xl text-black'>{location}</div>
    <div className='bg-[#B86300] text-black text-sm  px-2 py-1 rounded w-max mt-3 font-bold  transition-transform duration-300 hover:scale-125'>
      Show more
    </div>
  </div>
</div>)
};

export default LazyProjectBackground;