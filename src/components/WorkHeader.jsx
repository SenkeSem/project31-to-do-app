import Filter from '../components/icons/Filter';

const WorkHeader = () => {
  return (
    <div className="w-full h-28 bg-btnRed flex justify-between pt-4 pr-4">
      <section className="w-full flex flex-col justify-between items-center">
        <h1 className="italic font-thin text-xl text-signUpWhite">Work List</h1>
        <div className="text-signUpWhite flex justify-between w-full pl-12 pr-12 font-medium text-lg">
          <button className="w-24 h-9 flex flex-col items-center justify-start border-b-4">
            Today
          </button>
          <button className="w-24 h-9 flex flex-col items-center justify-start opacity-70">
            Month
          </button>
        </div>
      </section>
      <section>
        <Filter fill={'#FFFFFF'} />
      </section>
    </div>
  );
};

export default WorkHeader;
