import WorkHeader from '../components/WorkHeader';
import WorkFooter from '../components/WorkFooter';
import ToDo from '../components/ToDo';
import ModalFilter from '../components/shared/ModalFilter';
import Calendar from '../components/shared/Calendar';
import MiniCalendar from '../components/shared/MiniCalendar';

import { useState } from 'react';

const WorkList = () => {
  const toDo = [
    {
      userId: 1,
      id: 1,
      title: 'delectus aut autem',
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: 'quis ut nam facilis et officia qui',
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: 'fugiat veniam minus',
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: 'et porro tempora',
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: 'laboriosam mollitia et enim quasi adipisci quia provident illum',
      completed: false,
    },
    {
      userId: 1,
      id: 6,
      title: 'qui ullam ratione quibusdam voluptatem quia omnis',
      completed: false,
    },
    {
      userId: 1,
      id: 7,
      title: 'illo expedita consequatur quia in',
      completed: false,
    },
    {
      userId: 1,
      id: 8,
      title: 'quo adipisci enim quam ut ab',
      completed: true,
    },
    {
      userId: 1,
      id: 9,
      title: 'molestiae perspiciatis ipsa',
      completed: false,
    },
    {
      userId: 1,
      id: 10,
      title: 'illo est ratione doloremque quia maiores aut',
      completed: true,
    },
  ];

  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTodayActive, setIsTodayActive] = useState(false);

  const handleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  return (
    <div className="flex flex-col">
      <header>
        <WorkHeader
          monthActive={setIsTodayActive}
          isTodayActive={isTodayActive}
          handler={handleFilter}
        />
      </header>
      <main className="w-full">
        {isTodayActive && (
          <div className="shadow-lg pb-4">
            <div className="flex items-center justify-center mt-4 gap-3 italic font-thin text-homeLineBlack text-sm uppercase">
              <h5>August 2018</h5>
              {isCalendarOpen ? (
                <img
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  width={14}
                  src="/public/open.svg"
                  alt="open"
                  className="rotate-180 cursor-pointer"
                />
              ) : (
                <img
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  width={14}
                  src="/public/open.svg"
                  alt="open"
                  className="cursor-pointer"
                />
              )}
            </div>
            {isCalendarOpen ? <Calendar /> : <MiniCalendar />}
          </div>
        )}
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
      {isOpenFilter && <ModalFilter setActive={setIsOpenFilter} />}
    </div>
  );
};

export default WorkList;
