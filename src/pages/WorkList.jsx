import WorkHeader from '../components/WorkHeader';
import WorkFooter from '../components/WorkFooter';
import ToDo from '../components/ToDo';

import { getToDo } from '../axios';
import { useEffect, useState } from 'react';

const WorkList = () => {
  const [toDo, setToDo] = useState([]);

  useEffect(() => {
    getToDo().then((value) => setToDo(value));
  }, []);

  return (
    <div className="flex flex-col">
      <header>
        <WorkHeader />
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
    </div>
  );
};

export default WorkList;
