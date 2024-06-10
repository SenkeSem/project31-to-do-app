import WorkHeader from '../components/WorkHeader';
import WorkFooter from '../components/WorkFooter';
import ToDo from '../components/ToDo';
import ModalFilter from '../components/shared/ModalFilter';

import { getToDo } from '../axios';
import { useEffect, useState } from 'react';

const WorkList = () => {
  const [toDo, setToDo] = useState([]);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const handleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  useEffect(() => {
    getToDo().then((value) => setToDo(value));
  }, []);

  return (
    <div className="flex flex-col">
      <header>
        <WorkHeader handler={handleFilter} />
      </header>
      <main className="w-full">
        <h4 className="mt-6 ml-5 mb-5 font-thin italic text-sm uppercase text-textGray">
          Today, Aug 4/2018
        </h4>

        {toDo.map((item) => (
          <ToDo key={item.id} title={item.title} />
        ))}
      </main>
      <footer className="w-full sticky bottom-0">
        <WorkFooter />
      </footer>
      {isOpenFilter && (
        <ModalFilter setActive={setIsOpenFilter}>
          <p className="flex justify-between">
            Incomplete Tasks
            <img src="/public/greenCheck.svg" alt="greenCheck" />
          </p>
          <p>Completed Tasks</p>
          <p>All Tasks</p>
        </ModalFilter>
      )}
    </div>
  );
};

export default WorkList;
