import { Link } from 'react-router-dom';
import { useState } from 'react';

import ModalCreate from './shared/ModalCreate';
import MyTask from '../components/icons/MyTask';
import Menu from '../components/icons/Menu';
import Quick from '../components/icons/Quick';
import Profile from '../components/icons/Profile';
import BigPlus from '../components/icons/BigPlus';

const WorkFooter = () => {
  const [isCreateMenuOpen, setIsCreateMenuOpen] = useState(false);

  const handleOpenMenu = () => {
    setIsCreateMenuOpen(!isCreateMenuOpen);
  };

  return (
    <div className="w-full h-20 bg-workMenuDarkBlue">
      <nav>
        <ul className="flex justify-between p-4 text-signUpWhite">
          <Link to="/">
            <li className="h-11 flex flex-col items-center justify-between cursor-pointer">
              <MyTask />
              <p className="text-xs italic font-thin">My Task</p>
            </li>
          </Link>

          <Link to="/projects">
            <li className="h-11 flex flex-col items-center justify-between cursor-pointer text-textMenuGray">
              <Menu />
              <p className="text-xs italic font-thin">Menu</p>
            </li>
          </Link>

          <li onClick={handleOpenMenu} className="relative -top-7 cursor-pointer">
            <BigPlus />
          </li>

          <Link to="/quick">
            <li className="h-11 flex flex-col items-center justify-between cursor-pointer text-textMenuGray">
              <Quick />
              <p className="text-xs italic font-thin">Quick</p>
            </li>
          </Link>

          <Link to="/profile">
            <li className="h-11 flex flex-col items-center justify-between cursor-pointer text-textMenuGray">
              <Profile />
              <p className="text-xs italic font-thin">Profile</p>
            </li>
          </Link>
        </ul>
      </nav>

      {isCreateMenuOpen && (
        <ModalCreate setActive={setIsCreateMenuOpen}>
          <p className="w-full h-full flex items-center justify-center border-b-lightGray border-b-2 cursor-pointer">
            <Link to="/task">Add Task</Link>
          </p>
          <p className="w-full h-full flex items-center justify-center border-b-lightGray border-b-2 cursor-pointer">
            <Link to="/note">Add Quick Note</Link>
          </p>
          <p className="w-full h-full flex items-center justify-center cursor-pointer">
            <Link to="/checklist">Add Check List</Link>
          </p>
        </ModalCreate>
      )}
    </div>
  );
};

export default WorkFooter;
