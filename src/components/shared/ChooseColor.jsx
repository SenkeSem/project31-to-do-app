import { useState } from 'react';

import WhiteCheck from '../icons/WhiteCheck';

const ChooseColor = () => {
  const color = [
    'bg-todoBlue',
    'bg-projectRed',
    'bg-projectGreen',
    'bg-ChooseColor4',
    'bg-ChooseColor5',
  ];

  const [activeColor, setActiveColor] = useState(0);

  return (
    <>
      <h4 className="text-lg italic font-thin">Choose Color</h4>
      <div className="flex gap-3 mt-4">
        {color.map((item, id) => (
          <div
            key={item}
            onClick={() => setActiveColor(id)}
            className={`w-12 h-12 ${item} cursor-pointer rounded-lg flex items-center justify-center`}>
            {id === activeColor && <WhiteCheck />}
          </div>
        ))}
      </div>
    </>
  );
};

export default ChooseColor;
