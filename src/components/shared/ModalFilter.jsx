import { useState } from 'react';
import GreenCheck from '../icons/GreenCheck.jsx';

const ModalFilter = ({ setActive }) => {
  // TODO: create one component for Modal and use this Calendar info inside <Modal>{children}</Modal>
  const filterPoint = ['Incomplete Tasks', 'Completed Tasks', 'All Tasks'];

  const [isActiveFilter, setIsActiveFilter] = useState(0);

  return (
    <div
      onClick={() => setActive(false)}
      className="w-screen h-screen bg-homeLineBlack bg-opacity-40 fixed left-0 top-0">
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-4 rounded-lg bg-signUpWhite w-56 h-32 fixed top-24 right-5 text-base font-thin italic flex flex-col gap-3">
        {filterPoint.map((item, id) => (
          <p
            key={item}
            onClick={() => setIsActiveFilter(id)}
            className="flex justify-between cursor-pointer">
            {item}
            {isActiveFilter === id && <GreenCheck />}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ModalFilter;
