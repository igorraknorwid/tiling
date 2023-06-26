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
        className={`h-[300px] md:h-[400px] ${isIntersected} flex justify-center items-center `}
      >
          {isIntersected.length === 0 &&
       <div
       className="inline-block h-40 w-40 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
       role="status">
       <span
         className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]"
         ></span>       
     </div>
      }
      </div>
        </div>
  );
};

export default LazyProjectBackground;
