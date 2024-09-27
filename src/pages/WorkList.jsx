import { useState } from 'react';
import { useFetchUserTasksQuery } from '../redux/slices/tasksSliceApi';

import WorkHeader from '../components/layout/WorkHeader';
import WorkFooter from '../components/layout/WorkFooter';
import ToDo from '../components/ToDo';
import ModalFilter from '../components/shared/ModalFilter';
import Calendar from '../components/shared/Calendar';
import MiniCalendar from '../components/shared/MiniCalendar';

const WorkList = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTodayActive, setIsTodayActive] = useState(false);

  const { data, isLoading } = useFetchUserTasksQuery();

  const handleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  return (
    <div className="h-screen flex flex-col relative">
      <header>
        <WorkHeader
          color={'#F96060'}
          title={'Work List'}
          monthActive={setIsTodayActive}
          isTodayActive={isTodayActive}
          handler={handleFilter}
        />
      </header>
      <main className="w-full h-full">
        {isTodayActive && (
          <div className="shadow-lg pb-4">
            <div className="flex items-center justify-center mt-4 gap-3 italic font-thin text-homeLineBlack text-sm uppercase">
              <h5>August 2018</h5>
              {isCalendarOpen ? (
                <img
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  src="/public/open.svg"
                  alt="open"
                  className="rotate-180 cursor-pointer w-[14px]"
                />
              ) : (
                <img
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)}
                  src="/public/open.svg"
                  alt="open"
                  className="cursor-pointer w-[14px]"
                />
              )}
            </div>
            {isCalendarOpen ? <Calendar /> : <MiniCalendar />}
          </div>
        )}
        <h4 className="mt-6 ml-5 mb-5 font-thin italic text-sm uppercase text-textGray">
          Today, Aug 4/2018
        </h4>

        {!isLoading ? (
          data.data.map((item) => (
            <ToDo key={item.id} taskId={item.id} completed={item.is_completed} title={item.title} />
          ))
        ) : (
          <h1>Loading...</h1>
        )}
      </main>
      <footer className="w-full sticky bottom-0">
        <WorkFooter />
      </footer>
      {isOpenFilter && <ModalFilter setActive={setIsOpenFilter} />}
    </div>
  );
};

export default WorkList;
