import React from "react";
import arrow from "../../images/navbar/arrow.svg";
import { AnimatePresence, motion } from "framer-motion";
import messenger from "../../images/top/messenger.png";
// import telegram from "../../images/top/telegram.png";
import whatsapp from "../../images/top/whatsapp.png";
import call from "../../images/top/call.svg";

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
            className='fixed inset-x-0 bottom-0 top-[67px] z-10 bg-black  flex flex-col items-end  p-10 '
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
                      <a href='/bathroom-tiling/' className='block py-2'>
                        bathroom tiling
                      </a>
                      <a href='/kitchen-tiling/' className='block  py-2'>
                        kitchen tiling
                      </a>
                      <a href='/outdoor-tiling/' className='block  py-2'>
                        outdoor tiling
                      </a>
                      <a href='/commercial-tiling/' className='block  py-2'>
                        commercial tiling
                      </a>
                      <a href='/floor-tiling/' className='block  py-2'>
                        floor tiling
                      </a>
                      <a href='/shower-tiling/' className='block  pt-2'>
                        shower tiling
                      </a>
                    </div>
                  )}
                </div>
              </li>
              <li>
                <a href='/projects/'>FINISHED PROJECTS</a>
              </li>
              <li
                style={{ textShadow: "1px  1px  #1f1f2e" }}
                className='px-6 py-4 bg-[#B86300] rounded-lg'
              >
                <a href='/contact'>GET A FREE QUOTE</a>
              </li>
            </ul>

            <div className='flex gap-x-8 mt-8 md:mt-8 opacity-100'>
              <a href='https://m.me/igor.rak.184'>
                <img
                  src={messenger}
                  width={60}
                  height={60}
                  alt='messenger link'
                  className='transition-transform duration-300 md:hover:scale-125'
                />
              </a>

              <a href='https://api.whatsapp.com/send?phone=48690483990'>
                <img
                  src={whatsapp}
                  width={60}
                  height={60}
                  alt='whatsapp link'
                  className='transition-transform duration-300 md:hover:scale-125'
                />
              </a>
            </div>
            <div className='text-center text-2xl rounded-lg pt-8'>
              <a href='tel:+083 173 71XX'>
                <div className='flex justify-center items-center gap-x-3 md:bg-stone-700 md:opacity-80 md:py-3  rounded-lg'>
                  <img
                    src={call}
                    width={42}
                    height={42}
                    alt='phone number'
                    className='transition-transform duration-300 hover:scale-125'
                  />
                  <div
                    style={{ textShadow: "1px  1px  #6C6B69" }}
                    className='hover:underline'
                  >
                    083 173 71XX
                  </div>
                </div>
              </a>
            </div>
          </motion.div>
        </AnimatePresence>
      ) : null}
    </div>
  );
}
