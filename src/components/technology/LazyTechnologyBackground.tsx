import React, { FC } from "react";

interface Props {
  title: string;
  className: string;
}

const LazyProjectBackground: FC<Props> = ({ title, className }) => {
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
    <div>
      <div
        ref={topRef}
        className={`h-[300px] md:h-[400px] ${isIntersected} `}
      ></div>
      {/* <div className='bg-black text-white text-center'>{title}</div> */}
    </div>
  );
};

export default LazyProjectBackground;
