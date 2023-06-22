import React from "react";
import SurfaceInput from "./SurfaceInput";

interface IStore {
  surface:string;
  task:string;
  houseType:string;
}

const Calculator: React.FC = () => {
  const [page, setPage] = React.useState(1);
  const ref = React.useRef<IStore>();
  const nextHandler = () => {
    if (page < 5) {
      setPage((p) => p + 1);
    }
  };
  const previousHandler = () => {
    if (page > 1) {
      setPage((p) => p - 1);
    }
  };

  // const surfaceInputHandler =(value:string) => {
  //   ref.current.surface =
  // }

  return (
    <section className='bg-[#363333] text-white '>
      <div className='mx-auto max-w-[1400px] p-[16px] md:px-[60px]'>
        <div className="md:w-1/2 mx-auto p-5 border flex flex-col gap-y-4 justify-center">
          <div className="">{page}</div>
          {page===1&&<div>
           <SurfaceInput/>
            </div>}
          <div className='flex gap-x-2 justify-center'>
            {page > 1 && <button onClick={previousHandler}>Previous</button>}
            <button onClick={nextHandler}>Next</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Calculator;
