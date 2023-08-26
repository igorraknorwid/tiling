import React, { FC } from "react";

interface Props {
  title: string;
  location: string;
  className: string;
}

const LazyProjectBackground: FC<Props> = ({ title, location, className }) => {
  const [isIntersected, setIsIntersected] = React.useState("");
  const topRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const topObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsIntersected(className);
      }
    });

    if (topRef.current) {
      topObserver.observe(topRef.current);
    }

    return () => {
      topObserver.disconnect();
    };
  }, []);

  return (
    <div
      ref={topRef}
      className={`h-[300px] md:h-[700px] ${isIntersected} rounded-lg  p-5 flex ${
        isIntersected.length > 0
          ? "justify-end items-end"
          : "justify-center items-center"
      }`}
    >
      {isIntersected.length === 0 && (
        <div
          className='inline-block h-40 w-40 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
          role='status'
        >
          <span className='!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]'>
            L
          </span>
        </div>
      )}
      {isIntersected.length > 0 && (
        <div className='m-4'>
          <div className='bg-[#B86300] text-black text-sm  px-2 py-1 rounded w-max mt-3 font-bold  transition-transform duration-300 hover:scale-125'>
            <p>See more</p>
          </div>
          <div className='md:text-3xl font-bold text-xl text-black'>
            {title}
          </div>
          <div className='md:text-3xl font-bold mt-1 text-xl text-black'>
            {location}
          </div>
        </div>
      )}
    </div>
  );
};

export default LazyProjectBackground;
