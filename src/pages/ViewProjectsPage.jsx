import { useState } from 'react';
import { useFetchOneProjectQuery } from '../redux/slices/projectsSliceApi';
import { useParams } from 'react-router-dom';

import WorkHeader from '../components/WorkHeader';
import WorkFooter from '../components/WorkFooter';
import ModalFilter from '../components/shared/ModalFilter';
import Calendar from '../components/shared/Calendar';
import MiniCalendar from '../components/shared/MiniCalendar';
import ProjectTasksList from '../components/project/ProjectTasksList';

const ViewProjectsPage = () => {
  const { projectId } = useParams();
  const { data } = useFetchOneProjectQuery(projectId);

  console.log(data);

  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const [isTodayActive, setIsTodayActive] = useState(false);

  const handleFilter = () => {
    setIsOpenFilter(!isOpenFilter);
  };

  return (
    <div className="h-screen flex flex-col relative">
      <header>
        <WorkHeader
          title={data?.data.title}
          color={data?.data.color}
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

        <ProjectTasksList projectId={projectId} />
      </main>
      <footer className="w-full sticky bottom-0">
        <WorkFooter />
      </footer>
      {isOpenFilter && <ModalFilter setActive={setIsOpenFilter} />}
    </div>
  );
};

export default ViewProjectsPage;
