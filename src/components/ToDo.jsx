import { useState } from 'react';
import Complete from '../components/icons/Complete';
import ToDoMenu from './ToDoMenu';

const ToDo = ({ title }) => {
  const [isReady, setIsReady] = useState(false);
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const handleCompleted = () => {
    setIsReady(!isReady);
  };

  return (
    <div
      className={`z-2 h-16 flex items-center mr-4 ml-4 mb-4 shadow-md shadow-shadowGray relative ${
        isActiveMenu && '-left-[136px]'
      }`}>
      {isReady ? (
        <div
          onClick={handleCompleted}
          className="w-5 h-5 rounded-full bg-btnRed ml-6 mr-6 cursor-pointer flex items-center justify-center">
          <Complete />
        </div>
      ) : (
        <div
          onClick={handleCompleted}
          className="w-5 h-5 rounded-full border-4 border-todoBlue ml-6 mr-6 cursor-pointer"></div>
      )}

      <main className="w-full" onClick={() => setIsActiveMenu(!isActiveMenu)}>
        <h5
          className={`w-72 text-base font-medium ${
            isReady && 'line-through text-signUpGray'
          } truncate`}>
          {title}
        </h5>
        <p className={`text-signUpGray font-medium text-base ${isReady && 'line-through'}`}>
          9:00am
        </p>
      </main>
      <div className={`w-1 h-5 ${isReady ? 'bg-btnRed' : 'bg-todoBlue'} ml-auto`}></div>

      <ToDoMenu isActiveMenu={isActiveMenu} />
    </div>
  );
};

export default ToDo;
