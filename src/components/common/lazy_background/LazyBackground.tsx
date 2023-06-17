import React, { useState } from "react";


interface Props {
  clases:string;
  background:string;
   childComponent?: astroHTML.JSX.Element;
}

const LazyBackground: React.FC<Props> = ({ clases,background,childComponent}) => {
  return (
    <div className={`${clases} ${background}`}>
        <div>{childComponent} </div>
       <p>Hello</p>
    </div>
  );
};

export default LazyBackground;
