import React from "react";

import { IStep } from "../../types/form";

import Select from "./Select";

export const mySteps: IStep[] = [
  {
    id: 1,
    name: "tiling",
    answers: [
      { id: 0, text: "Which kind of service you need?" },
      { id: 1, text: "Domestic tiling" },
      { id: 2, text: "Comercial tiling" },
    ],
  },
  {
    id: 2,
    name: "job",

    answers: [
      { id: 0, text: "What type of job you need?" },
      { id: 1, text: "New tile instalation/repair" },
      { id: 2, text: "Repair tiles" },
      { id: 3, text: "Reseal tiles" },
      { id: 4, text: "Other tiling job" },
    ],
  },
  {
    id: 3,
    name: "material",

    answers: [
      { id: 0, text: "Do you already have materials?" },
      { id: 1, text: "No, I need expert help" },
      { id: 2, text: "Yes, I have material" },
    ],
  },
  {
    id: 4,
    name: "term",
    answers: [
      { id: 0, text: "When do you need to start..." },
      { id: 1, text: "Within 1 month" },
      { id: 2, text: "Within 1-3 months" },
      { id: 3, text: "Within 3-6 month" },
      { id: 4, text: "As soon as posible" },
      { id: 5, text: "Other" },
    ],
  },
  {
    id: 5,
    name: "location",
  },
  {
    id: 6,
    name: "contacts",
    isFinish: true,
  },
];

const isValidEmail = (email: string) => {
  // Basic email format validation
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
};

const isValidPhoneNumber = (phone: string) => {
  // Phone format validation for Ireland "0xx xxx xxx"
  const phonePattern = /^0\d{2}\s\d{3}\s\d{3}$/;
  return phonePattern.test(phone);
};

function addSpaceEveryThreeChars(inputString: string): string {
  let result: string[] = [];
  const arrFromString = inputString.split("").filter((chat) => chat !== " ");
  arrFromString.forEach((chart, i) => {
    if (i > 0 && i % 3 === 0) {
      result.push(" ");
      result.push(chart);
    } else {
      result.push(chart);
    }
  });
  return result.join("");
}

const Form: React.FC = () => {
  const [step, setStep] = React.useState<number>(0);
  const [location, setLocation] = React.useState<string>("");
  const [phone, setPhone] = React.useState<string>("");
  const [email, setEmail] = React.useState<string>("");
  const [data, setData] = React.useState<IStep | null>();
  const [answer, setAnswer] = React.useState<string>("");
  const [isAvalibleAnswer, setIsAvalibleAnswer] =
    React.useState<boolean>(false);
  const [isPhone, setIsPhone] = React.useState<boolean>(true);
  const [isEmail, setIsEmail] = React.useState<boolean>(true);

  const clientData = React.useRef<any>({});

  const locationChangeHandler = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setLocation(event.target.value.trim());
    clientData.current.location = event.target.value.trim();
  };
  const phoneChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhone(addSpaceEveryThreeChars(event.target.value));
    setIsPhone(true);
  };
  const emailChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value.trim());
    setIsEmail(true);
  };

  React.useEffect(() => {
    setData(mySteps[step]);
    if (
      mySteps[step].name !== "location" &&
      mySteps[step].name !== "contacts"
    ) {
      setAnswer(mySteps[step].answers[0].text);
    }
  }, [step]);

  const handleInputChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAnswer(event.target.value);
    const find = data.answers.find((a) => a.text === event.target.value);

    if (find.id !== 0) {
      setIsAvalibleAnswer(true);
      clientData.current[data.name] = event.target.value;
    } else setIsAvalibleAnswer(false);
  };

  const clickHandler = () => {
    setStep((s) => s + 1);
    console.log(clientData.current);
    setIsAvalibleAnswer(false);
  };

  const clickSendButtonHandler = () => {
    const isMail = isValidEmail(email);
    const isPhone = isValidPhoneNumber(phone);

    if (isMail) {
      clientData.current.email = email;
    }

    if (isPhone) {
      clientData.current.phone = phone
        .trim()
        .split("")
        .filter((c) => c !== " ")
        .join("");
    }

    if (!isMail && !isPhone) {
      setIsEmail(false);
      setIsPhone(false);
      return;
    }

    console.log(clientData.current);
    setStep(0);
  };

  return (
    <div className='relative border border-red-700 backdrop-blur-sm text-black  p-4 pt-8 rounded-lg flex flex-col space-y-2 justify-center w-full lg:w-2/3 2xl:w-1/3 '>
      <label
        htmlFor='options'
        className='bg-red-700  text-white  md:text-xl rounded-2xl text-center py-2 px-4 absolute top-[-20px] w-[70%]   left-[15%] right-[15%] uppercase '
      >
        Get a Tiling Quote
      </label>
      <div className='flex flex-col justify-center items-center'>
        {data?.name !== "location" && data?.name !== "contacts" && (
          <div className='flex flex-col gap-4'>
            <Select
              step={data}
              answer={answer}
              handleInputChange={handleInputChange}
            />
            {isAvalibleAnswer && (
              <button
                onClick={clickHandler}
                className={`bg-red-700 text-white md:text-xl rounded-xl px-10 hover:scale-110 transition-transform py-2`}
                type='button'
              >
                Go
              </button>
            )}
          </div>
        )}
        {data?.name === "location" && (
          <div className='flex flex-col   gap-4'>
            <input
              className='block appearance-none w-full bg-white border border-gray-300 text-gray-700 md:text-xl font-medium py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
              type='text'
              value={location}
              onChange={locationChangeHandler}
              placeholder='Your Eircode/Location'
            />
            {location.length > 0 && (
              <button
                onClick={clickHandler}
                className={`bg-red-700 text-white md:text-xl rounded-xl px-10 hover:scale-110 transition-transform py-2`}
                type='button'
              >
                Go
              </button>
            )}
          </div>
        )}
        {data?.name === "contacts" && (
          <div className='flex flex-col gap-4'>
            <div>
              <input
                className='block appearance-none w-full bg-white border border-gray-300 text-gray-700 md:text-xl font-medium py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='text'
                value={phone}
                onChange={phoneChangeHandler}
                placeholder='Your Phone'
              />
              {!isPhone && (
                <div className='text-red-700'>
                  Enter valid phone like : 0xx xxx xxx
                </div>
              )}
            </div>
            <div>
              <input
                className='block appearance-none w-full bg-white border border-gray-300 text-gray-700 md:text-xl font-medium py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
                type='text'
                value={email}
                onChange={emailChangeHandler}
                placeholder='Your Email'
              />
              {!isEmail && (
                <div className='text-red-700'>Please enter a valid email.</div>
              )}
            </div>

            {(phone.length > 0 || email.length > 0) && (
              <button
                onClick={clickSendButtonHandler}
                className={`bg-red-700 font-bold py-2 text-white md:text-xl rounded-xl px-10 hover:scale-110 transition-transform uppercase`}
                type='button'
              >
                Send
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Form;
