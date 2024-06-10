import { Link } from 'react-router-dom';
import { useState } from 'react';

import ModalCreate from './shared/ModalCreate';

const WorkFooter = () => {
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsCreateMenuOpen(!isCreateMenuOpen);
  };

  return (
    <div className="w-full h-24 bg-workMenuDarkBlue">
      <nav>
        <ul className="flex justify-between p-4 text-signUpWhite">
          <Link to="/">
            <li className="h-11 flex flex-col items-center justify-between cursor-pointer">
              <img width={24} src="/public/myTask.svg" alt="myTask" />
              <p className="text-xs italic font-thin">My Task</p>
            </li>
          </Link>
          <Link to="/projects">
            <li className="h-11 flex flex-col items-center justify-between cursor-pointer text-textMenuGray">
              <img width={24} src="/public/menu.svg" alt="menu" />
              <p className="text-xs italic font-thin">Menu</p>
            </li>
          </Link>
          <li>
            <img
              onClick={handleOpenMenu}
              className="relative -top-7 cursor-pointer"
              src="/public/bigPlus.svg"
              alt="bigPlus"
            />
          </li>
          <Link to="/quick">
            <li className="h-11 flex flex-col items-center justify-between cursor-pointer text-textMenuGray">
              <img width={19} src="/public/quick.svg" alt="quick" />
              <p className="text-xs italic font-thin">Quick</p>
            </li>
          </Link>
          <Link to="/profile">
            <li className="h-11 flex flex-col items-center justify-between cursor-pointer text-textMenuGray">
              <img width={19} src="/public/profile.svg" alt="profile" />
              <p className="text-xs italic font-thin">Profile</p>
            </li>
          </Link>
        </ul>
      </nav>

      {isCreateMenuOpen && (
        <ModalCreate setActive={setIsCreateMenuOpen}>
          <p className="w-full h-full flex items-center justify-center border-b-lightGray border-b-2 cursor-pointer">
            Add Task
          </p>
          <p className="w-full h-full flex items-center justify-center border-b-lightGray border-b-2 cursor-pointer">
            Add Quick Note
          </p>
          <p className="w-full h-full flex items-center justify-center cursor-pointer">
            Add Check List
          </p>
        </ModalCreate>
      )}
    </div>
  );
};

export default WorkFooter;
