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
    isFinish:boolean
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
            {id:0,text:"Which kind of service you need..."},
            {id:1,text:"Domestic tiling"},
            {id:2,text:"Comercial tiling"},
        ],
        isFinish:false,
    },
    {
        id:2,
        name:"term",
        isActive:false,      
        answers:[    
            {id:0,text:"When do you need to start..."},
            {id:1,text:"As soon as posible"},
            {id:2,text:"Other"},
        ],
        isFinish:true,
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
        } else {
           
        }
    }
    
  return (
    <section className="bg-white text-black border-4 border-[#B86300] p-4 rounded-lg flex flex-col space-y-2 justify-center">  
     <label htmlFor="options">Get a Tiling Quote</label>
     <select id="options" value={answer} onChange={handleInputChange}>       
        {data?.answers.map((option) => (
          <option key={option.id} value={option.text} id={option.id.toString()}  >
            {option.text}
          </option>
        ))}
      </select>
     <button onClick={clickHandler} className={`bg-[#B86300] ${!isAvalibleAnswer&&"opacity-50"}`} type="button" disabled={!isAvalibleAnswer}>Next</button>
    </section>
  );
};

export default Form;
