import WorkHeader from '../components/WorkHeader';
// import WorkFooter from '../components/WorkFooter';

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
        <h1 className=" text-5xl">CONTENT!!!</h1>
        {toDo.map((item) => (
          <p className="mt-3 ml-3" key={item.id}>
            {item.title}
          </p>
        ))}
      </main>
      <footer className="w-full absolute bottom-0">{/* <WorkFooter /> */}</footer>
    </div>
  );
};

export default WorkList;
