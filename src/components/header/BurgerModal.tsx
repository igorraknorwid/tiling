import React from "react";
import arrow from "../../images/navbar/arrow.svg";
import { AnimatePresence, motion } from "framer-motion";

function setBodyScroll(isOpen: boolean) {
  const body = document.body;
  if (isOpen) {
    body.classList.add("overflow-hidden");
  } else {
    body.classList.remove("overflow-hidden");
  }
}

export default function BurgerModal() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = React.useState(false);

  const parentRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    setBodyScroll(isOpen);
  }, [isOpen]);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target;
    const isParent = target === parentRef.current;
    if (parentRef.current) {
      if (isParent) {
        setIsOpen(false);
      }
    }
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  {
    /* Mobile navigation */
  }
  return (
    <div className='flex items-center md:hidden'>
      <button
        onClick={toggleMenu}
        type='button'
        className='flex flex-col gap-y-2 mr-2'
        aria-label='Toggle menu'
      >
        <span
          className={`w-8 h-1 bg-white ${
            isOpen &&
            "transform rotate-45 translate-x-[-2px] translate-y-[7px] "
          } transition-transform duration-300`}
        ></span>
        {!isOpen && (
          <span className='w-8 h-1 bg-white transition-transform duration-300'></span>
        )}
        <span
          className={`w-8 h-1 bg-white  ${
            isOpen &&
            "transform rotate-[-45deg] translate-x-[-2px] translate-y-[-5px]"
          } transition-transform duration-300`}
        ></span>
      </button>
      {/* Mobile menu modal */}
      {isOpen ? (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0, y: 500 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -500 }}
            transition={{ ease: "easeOut", duration: 0.4 }}
            ref={parentRef}
            id='target_modal_mobile'
            onClick={(e) => handleClick(e)}
            className='fixed inset-x-0 bottom-0 top-[67px] z-10 bg-black  flex justify-center p-10 '
          >
            <ul className='space-y-8 text-xl flex flex-col items-end'>
              <li>
                <div>
                  <p className='flex justify-between' onClick={toggleDropdown}>
                    TILING SERVICES{" "}
                    <img
                      className={`mx-1 transition-transform duration-300  ${
                        isDropdownOpen && "transform rotate-180"
                      }`}
                      src={arrow}
                      width={14}
                      height={15}
                      alt='arrow'
                    />
                  </p>
                  {isDropdownOpen && (
                    <div className='flex flex-col items-end'>
                      <a href='/service1' className='block py-2'>
                        bathroom tiling
                      </a>
                      <a href='/service2' className='block  py-2'>
                        kitchen tiling
                      </a>
                      <a href='/service3' className='block  py-2'>
                        outdoor tiling
                      </a>
                      <a href='/service4' className='block  py-2'>
                        commercial tiling
                      </a>
                      <a href='/service5' className='block  py-2'>
                        floor tiling
                      </a>
                      <a href='/service6' className='block  pt-2'>
                        mastic services
                      </a>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <a href='/about'>TOOLS & SUPPLIES</a>
              </li>
              <li>
                <a href='/services'>FINISHED PROJECTS</a>
              </li>
              <li className='px-6 py-4 bg-red-600 rounded-lg'>
                <a href='/contact'>GET A FREE QUOTE</a>
              </li>
            </ul>
          </motion.div>
        </AnimatePresence>
      ) : null}
    </div>
  );
}
