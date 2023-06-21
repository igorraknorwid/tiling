import React from "react";

interface Props {}

const Calculator: React.FC<Props> = () => {
  const [page, setPage] = React.useState(1);
  const ref = React.useRef({});
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

  return (
    <section className='bg-[#363333] text-white '>
      <div className='mx-auto max-w-[1400px] p-[16px] md:px-[60px]'>
        <div>
          <div>{page}</div>
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
