import React from "react";

interface IAnswer{
    id:number,
    text:string,
 
}

interface IStep {
    id:number;
    name:string;
    isActive:boolean;
    answers:IAnswer[],
    isFinish?:boolean
}
interface IClientData{
    tiling:string
}
export const mySteps:IStep[] = [
    {
        id:1,
        name:"tiling",
        isActive:true,     
        answers:[
            {id:0,text:"Which kind of service you need?"},
            {id:1,text:"Domestic tiling"},
            {id:2,text:"Comercial tiling"},
        ],
      
    },
    {
        id:2,
        name:"job",
        isActive:true,     
        answers:[
            {id:0,text:"What type of job you need?"},
            {id:1,text:"New tile instalation/repair"},
            {id:2,text:"Repair tiles"},
            {id:3,text:"Reseal tiles"},
            {id:4,text:"Other tiling job"},
        ],
      
    },
    {
        id:3,
        name:"material",
        isActive:true,     
        answers:[
            {id:0,text:"Do you already have materials?"},
            {id:1,text:"Now,I expert need help"},
            {id:2,text:"NYes,I have material"},
         
        ],
      
    },
    {
        id:4,
        name:"term",
        isActive:false,      
        answers:[    
            {id:0,text:"When do you need to start..."},
            {id:1,text:"Within 1 month"},
            {id:2,text:"Within 1-3 months"},
            {id:3,text:"Within 3-6 month"},
            {id:4,text:"As soon as posible"},
            {id:5,text:"Other"},
        ],       
    }
]



const Form: React.FC = () => {
    const[step,setStep] = React.useState<number>(0)
    const[data,setData] = React.useState<IStep|null>()
    const[answer,setAnswer] = React.useState<string>("")
    const[isAvalibleAnswer,setIsAvalibleAnswer] = React.useState<boolean>(false)

    const clientData = React.useRef<any>({})



    React.useEffect(()=>{
        setData(mySteps[step])
        setAnswer(mySteps[step].answers[0].text)              
    },[step])


    const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {       
        setAnswer(event.target.value) 
        const find = data.answers.find(a=>a.text===event.target.value);
       
        if(find.id!==0){
            setIsAvalibleAnswer(true)
            clientData.current[data.name] = event.target.value
        } else (setIsAvalibleAnswer(false))
      };

    const clickHandler = () => {
        if (!data.isFinish){
            setStep(s=>s+1)
            console.log(clientData.current)
            setIsAvalibleAnswer(false)
        } else {
           
        }
    }
    
  return (
    <div className="bg-white text-black border-4 border-[#B86300] p-4 pt-8 rounded-lg flex flex-col space-y-2 justify-center w-full">  
     <label htmlFor="options" className="bg-[#B86300] text-black font-bold text-xl rounded-2xl text-center py-2 px-4  ">Get a Tiling Quote</label>
     <div className="flex gap-4">
     <select className="w-full border border-[#B86300] p-2 py-4" id="options" value={answer} onChange={handleInputChange}>       
        {data?.answers.map((option) => (
          <option className="py-8" key={option.id} value={option.text} id={option.id.toString()}  >
            {option.text}
          </option>
        ))}
      </select>
      {isAvalibleAnswer&& <button onClick={clickHandler} className={`bg-[#B86300] rounded-xl px-10`} type="button" >Go</button>}
     </div>       
    </div>
  );
};

export default Form;
