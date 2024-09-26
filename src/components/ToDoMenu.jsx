import { Link } from 'react-router-dom';

import RedPencil from './icons/RedPencil';
import RedTrash from './icons/RedTrash';

const ToDoMenu = ({ isActiveMenu, isActive, taskId }) => {
  return (
    <div
      className={`z-0 absolute ${
        isActiveMenu ? '-right-[136px]' : 'hidden'
      }  w-[120px] h-[70px] flex shadow-md shadow-shadowGray `}>
      <div className="w-[60px] flex items-center justify-center cursor-pointer border-r-[1px] border-r-[rgba(0,0,0,0.1)]">
        <Link to={`/task/${taskId}`}>
          <RedPencil />
        </Link>
      </div>
      <div
        onClick={isActive}
        className="w-[60px] flex items-center justify-center cursor-pointer border-l-[1px] border-l-[rgba(0,0,0,0.1)]">
        <RedTrash />
      </div>
    </div>
  );
};

export default ToDoMenu;
