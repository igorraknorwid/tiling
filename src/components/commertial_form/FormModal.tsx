import React from "react";

function Modal() {
  return (
    <div className='fixed top-0 bottom-0 right-0 left-0 bg-black/80 flex flex-col justify-center items-center mx-2'>
      <div className='bg-white md:w-1/2 p-10 text-black rounded-xl md:text-xl'>
        <h2 className='text-lg md:text-2xl text-center mb-4 font-bold'>
          Thank you for reaching out to us!{" "}
        </h2>
        <p className='mb-2'>
          Your message is important to us, and we're committed to providing you
          with the assistance you need. Our dedicated team aims to respond to
          your inquiry <strong>within 48 hours</strong>, either by phone or
          email, based on the information you've provided in the form.
        </p>

        <p>
          In the meantime, feel free to explore our website for more information
          about our services. We appreciate your patience and look forward to
          connecting with you soon.
        </p>
      </div>
    </div>
  );
}

export default Modal;
