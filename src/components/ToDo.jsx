import { useState } from 'react';

const ToDo = ({ title }) => {
  const [isReady, setIsReady] = useState(false);

  const handleCompleted = () => {
    setIsReady(!isReady);
  };

  return (
    <div className=" h-16 flex items-center mr-4 ml-4 mb-4 shadow-md shadow-shadowGray">
      {isReady ? (
        <div
          onClick={handleCompleted}
          className="w-5 h-5 rounded-full bg-btnRed ml-6 mr-6 cursor-pointer flex items-center justify-center">
          <img src="/public/compete.svg" alt="compete" />
        </div>
      ) : (
        <div
          onClick={handleCompleted}
          className="w-5 h-5 rounded-full border-4 border-todoBlue ml-6 mr-6 cursor-pointer"></div>
      )}

      <main>
        <h5 className={`text-base font-medium ${isReady && 'line-through text-signUpGray'}`}>
          {title}
        </h5>
        <p className={`text-signUpGray font-medium text-base ${isReady && 'line-through'}`}>
          9:00am
        </p>
      </main>
      <div className={`w-1 h-5 ${isReady ? 'bg-btnRed' : 'bg-todoBlue'} ml-auto`}></div>
    </div>
  );
};

export default ToDo;
