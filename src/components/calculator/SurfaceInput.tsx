import React, { useState } from "react";

interface NumberInputProps {
  onBlur: (value: number | "") => void;
  isError: boolean;
}

const NumberInputComponent: React.FC<NumberInputProps> = ({
  onBlur,
  isError,
}) => {
  const [inputValue, setInputValue] = useState<number | "">("");
  const [isEmptyError, setIsEmptyError] = useState<boolean>(false);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    if (value === "" || parseInt(value, 10) === 0) {
      setIsEmptyError(true);
    } else setIsEmptyError(false);
    if (/^\d*$/.test(value) || value === "") {
      setInputValue(value === "" ? "" : parseInt(value, 10));
      onBlur(value === "" ? "" : parseInt(value, 10));
    }
  };

  const handleInputBlur = () => {
    if (inputValue === "" || inputValue === 0) {
      setIsEmptyError(true);
    } else setIsEmptyError(false);
    if (onBlur) {
      onBlur(inputValue);
    }
  };

  return (
    <div>
      <label>Number Input:</label>
      <input
        type='number'
        value={inputValue}
        onChange={handleInputChange}
        onBlur={handleInputBlur}
        placeholder='Enter a number'
        className='text-black'
      />

      {isError ? (
        <p className='bg-red-500'>
          Please enter a value less than or equal to 20
        </p>
      ) : null}
      {isEmptyError ? <p className='bg-red-500'>Required field.</p> : null}
    </div>
  );
};

export default NumberInputComponent;
