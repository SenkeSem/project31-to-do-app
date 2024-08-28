import Filter from '../components/icons/Filter';

const WorkHeader = ({ handler, monthActive, isTodayActive }) => {
  return (
    <div className="w-full h-28 bg-btnRed flex justify-between pt-4 pr-4">
      <section className="w-full flex flex-col justify-between items-center">
        <h1 className="italic font-thin text-xl text-signUpWhite">Work List</h1>
        <div className="text-signUpWhite flex justify-between w-full pl-12 pr-12 font-medium text-lg">
          <button
            onClick={() => monthActive(false)}
            className={`w-24 h-9 flex flex-col items-center justify-start ${
              !isTodayActive ? 'border-b-4' : 'opacity-70'
            }`}>
            Today
          </button>
          <button
            onClick={() => monthActive(true)}
            className={`w-24 h-9 flex flex-col items-center justify-start  ${
              isTodayActive ? 'border-b-4' : 'opacity-70'
            }`}>
            Month
          </button>
        </div>
      </section>
      <section>
        <Filter handler={handler} fill={'#FFFFFF'} />
      </section>
    </div>
  );
};

export default WorkHeader;
