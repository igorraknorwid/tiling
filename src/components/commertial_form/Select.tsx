import React from "react";
import { IStep } from "../../types/form";
import { AnimatePresence,motion,useAnimate } from "framer-motion";


interface Props {
  step:IStep|null;
  answer:string;
  handleInputChange(event: React.ChangeEvent<HTMLSelectElement>):void
}

const Select: React.FC<Props> = ({step,answer,handleInputChange}) => {

  return (
  
    <motion.div className={`relative`}
      key={step?.name}  
     animate={{ opacity: 1, scale: 1 }} 
     initial= {{ opacity: 0, scale: 0.5 }}
     exit={{ opacity: 0, scale: 0.5 }} 
      transition={{
      duration: 0.3,
      ease: [0, 0.71, 0.2, 1.01],
      scale: {
        type: "spring",
        damping: 10,
        stiffness: 100,
        restDelta: 0.001
      }
    }}
   
   >
        <select className="block appearance-none w-full bg-white border border-gray-300 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="options" value={answer} onChange={handleInputChange}>       
                {step?.answers.map((option) => (
            <option className="py-8" key={option.id} value={option.text} id={option.id.toString()}>
                    {option.text}
            </option>
                ))}
         </select>
         <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
        <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.95 7.95a.5.5 0 010 .7l-4 4a.5.5 0 11-.7-.7L11.29 8 8.25 4.95a.5.5 0 11.7-.7l4 4z"></path></svg>
      </div>
    </motion.div>
 
  );
};

export default Select;