import { useState } from 'react';
import { useDeleteTaskMutation } from '../redux/slices/tasksSliceApi';

import Complete from '../components/icons/Complete';
import ToDoMenu from './ToDoMenu';

const ToDo = ({ title, completed, taskId }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const [deleteTask] = useDeleteTaskMutation();

  const handleCompleted = () => {
    // setIsReady(!isReady);
  };

  const handleDeleteTask = async (taskId) => {
    try {
      let res = deleteTask(taskId);

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div
      className={`z-2 h-16 flex items-center mr-4 ml-4 mb-4 shadow-md shadow-shadowGray relative ${
        isActiveMenu && '-left-[136px]'
      }`}>
      {completed ? (
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
            completed && 'line-through text-signUpGray'
          } truncate`}>
          {title}
        </h5>
        <p className={`text-signUpGray font-medium text-base ${completed && 'line-through'}`}>
          9:00am
        </p>
      </main>
      <div className={`w-1 h-5 ${completed ? 'bg-btnRed' : 'bg-todoBlue'} ml-auto`}></div>

      <ToDoMenu
        taskId={taskId}
        isActive={() => handleDeleteTask(taskId)}
        isActiveMenu={isActiveMenu}
      />
    </div>
  );
};

export default ToDo;
