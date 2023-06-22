import React, { useState } from 'react';

const SeveralInput: React.FC = () => {
  const [value, setValue] = useState<number>(1);
 

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const num = Number(event.target.value)
    setValue(num)
  };

  const renderTooltip = () => {
    if (value > 1 || value < 21) {
      return null;
    }
    return <div className="">Please enter a number from 1 to 20</div>;
  };

  return (
    <div>
      <input type="number" value={value} onChange={handleChange} className='text-black' placeholder='0' />
      {renderTooltip()}
    </div>
  );
}

export default SeveralInput;