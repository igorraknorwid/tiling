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
            transition={{ ease: "easeOut", duration: 0.8 }}
            // animate={{ scale: 1, opacity: 1 }}
            // exit={{ scale: 0.8, opacity: 0 }}
            // transition={{ type: "spring" }}
            ref={parentRef}
            id='target_modal_mobile'
            onClick={(e) => handleClick(e)}
            className='fixed inset-x-0 bottom-0 top-[67px] z-10 bg-black  flex justify-center p-10 '
          >
            <ul className='space-y-8 text-xl'>
              <li>
                <div>
                  <p
                    className='flex justify-center items-center gap-x-1'
                    onClick={toggleDropdown}
                  >
                    TILING SERVICES{" "}
                    <img
                      className='mx-1'
                      src={arrow}
                      width={14}
                      height={15}
                      alt='arrow'
                    />
                  </p>
                  {isDropdownOpen && (
                    <div className=''>
                      <a href='/service1' className='block px-4 py-2 '>
                        Bathroom tiling
                      </a>
                      <a href='/service2' className='block px-4 py-2 '>
                        Kitchen tiling
                      </a>
                      <a href='/service3' className='block px-4 py-2 '>
                        Outdoor tiling
                      </a>
                      <a href='/service4' className='block px-4 py-2 '>
                        Commercial tiling
                      </a>
                      <a href='/service5' className='block px-4 py-2 '>
                        Floor tiling
                      </a>
                      <a href='/service6' className='block px-4 pt-2 '>
                        Mastic Services
                      </a>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <a href='/about' className=''>
                  TOOLS & SUPPLIES
                </a>
              </li>
              <li>
                <a href='/services' className=''>
                  FINISHED PROJECTS
                </a>
              </li>
              <li>
                <a href='/contact' className=''>
                  GET A FREE QUOTE
                </a>
              </li>
            </ul>
          </motion.div>
        </AnimatePresence>
      ) : null}
    </div>
  );
}
