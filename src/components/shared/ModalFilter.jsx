import { useState } from 'react';

const ModalFilter = ({ setActive }) => {
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
            {isActiveFilter === id && <img src="/public/greenCheck.svg" alt="greenCheck" />}
          </p>
        ))}
      </div>
    </div>
  );
};

export default ModalFilter;
