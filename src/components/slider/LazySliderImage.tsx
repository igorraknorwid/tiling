import React, { FC } from "react";
import fake from "../../images/fake.svg";
interface Props {
  title: string;
  src: string;
}

const LazySliderImage: FC<Props> = ({ title, src }) => {
  const [isIntersected, setIsIntersected] = React.useState(fake);
  const topRef = React.useRef<HTMLImageElement>(null);
  React.useEffect(() => {
    const topObserver = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        setIsIntersected(src);
      }
    });

    if (topRef.current) {
      topObserver.observe(topRef.current);
    }

    return () => {
      topObserver.disconnect();
    };
  }, []);

  return <img ref={topRef} src={isIntersected} alt={title} />;
};

export default LazySliderImage;
