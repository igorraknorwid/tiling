import React from "react";

// interface IModal {
//   expandClickHandler: () => void;
//   isModal: boolean;
// }

function Modal() {
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0 bg-black/80 flex flex-col justify-center items-center'>
      {/* <button className='border' onClick={expandClickHandler}>
        Close
      </button> */}
      <div className='bg-white w-1/2 py-10 text-black'>Modal</div>
    </div>
  );
}

export default Modal;
