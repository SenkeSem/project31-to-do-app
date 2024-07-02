import WorkHeader from '../components/WorkHeader';
import WorkFooter from '../components/WorkFooter';
import ToDo from '../components/ToDo';
import ModalFilter from '../components/shared/ModalFilter';
import Calendar from '../components/shared/Calendar';
import MiniCalendar from '../components/shared/MiniCalendar';

// import { getToDo } from '../axios';
import { useEffect, useState } from 'react';

import { useGetPeopleQuery } from '../redux/mokeApi';

const WorkList = () => {
  // const [toDo, setToDo] = useState([]);
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTodayActive, setIsTodayActive] = useState(false);

  const { data, isFetching, error } = useGetPeopleQuery();

  const handleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  // useEffect(() => {
  //   getToDo().then((value) => setToDo(value));
  // }, []);

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

        {/* {toDo.map((item) => (
          <ToDo key={item.id} title={item.title} />
        ))} */}

        {data.results.map((item) => (
          <ToDo key={item.name} title={item.name} />
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
