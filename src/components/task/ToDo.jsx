import { useState } from 'react';
import { useDeleteTaskMutation, useUpdateTaskMutation } from '../../redux/slices/tasksSliceApi';

import ToDoMenu from './ToDoMenu';
import Complete from '../icons/Complete';

const ToDo = ({ title, completed, taskId, item }) => {
  const [isActiveMenu, setIsActiveMenu] = useState(false);

  const [deleteTask] = useDeleteTaskMutation();
  const [updateTask] = useUpdateTaskMutation();

  const handleUpdateTask = async () => {
    try {
      let res = await updateTask({
        body: {
          title: item.title,
          due_date: item.due_date,
          description: item.description,
          assigned_to: item.assigned_to,
          is_completed: !item.is_completed,
          project_id: item.project_id,
          owner_id: item.owner_id,
          members: [],
          attachments: item.attachments,
        },
        taskId,
      });

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteTask = async (item) => {
    try {
      let res = deleteTask(item);

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
          onClick={handleUpdateTask}
          className="w-5 h-5 rounded-full bg-btnRed ml-6 mr-6 cursor-pointer flex items-center justify-center">
          <Complete />
        </div>
      ) : (
        <div
          onClick={handleUpdateTask}
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
