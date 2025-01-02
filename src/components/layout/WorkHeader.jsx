import Filter from '../icons/Filter';

const WorkHeader = ({ title, color, handler, monthActive, isTodayActive }) => {
  return (
    <div
      style={{ backgroundColor: `${color}` }}
      className="w-full h-28 flex justify-between pt-4 pr-4">
      <section className="w-full flex flex-col justify-between items-center">
        <h1 className="italic font-thin text-xl text-signUpWhite">{title}</h1>
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
      <section onClick={handler}>
        <Filter fill={'#FFFFFF'} />
      </section>
    </div>
  );
};

export default WorkHeader;
