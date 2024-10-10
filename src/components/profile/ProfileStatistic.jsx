const ProfileStatistic = ({ events, todo, quick_notes }) => {
  return (
    <div className="pt-4 px-6">
      <h2 className="text-lg italic font-thin mb-5">Statistic</h2>
      <section className="flex justify-between">
        <article className="flex flex-col items-center">
          <div className="w-20 h-20 border-2 border-btnRed rounded-full flex items-center justify-center">
            <p className="text-lg italic font-thin">{events}</p>
          </div>
          <p className="text-base font-medium mt-4">Events</p>
        </article>
        <article className="flex flex-col items-center">
          <div className="w-20 h-20 border-2 flex items-center justify-center border-todoBlue rounded-full">
            <p className="text-lg italic font-thin">{todo}</p>
          </div>
          <p className="text-base font-medium mt-4">To do </p>
        </article>
        <article className="flex flex-col items-center">
          <div className="w-20 h-20 border-2 flex items-center justify-center border-sliderPurple rounded-full">
            <p className="text-lg italic font-thin">{quick_notes}</p>
          </div>
          <p className="text-base font-medium mt-4">Quick Notes</p>
        </article>
      </section>
    </div>
  );
};

export default ProfileStatistic;
