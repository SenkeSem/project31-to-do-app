const ProjectItem = ({ title, tasks, color }) => {
  console.log(color);

  return (
    <div className="w-full h-44 p-6 rounded-md shadow-md shadow-shadowGray">
      <div className="relative w-6 h-6">
        <div
          style={{ backgroundColor: `${color}`, opacity: '.4' }}
          className={'w-6 h-6 rounded-full'}></div>
        <div
          style={{ backgroundColor: `${color}` }}
          className={'w-3 h-3 rounded-full absolute top-[25%] left-[25%]'}></div>
      </div>
      <h5 className="mt-11 italic font-thin text-lg">{title}</h5>
      <p className="mt-3 font-medium text-base text-textGray">{tasks} Tasks</p>
    </div>
  );
};

export default ProjectItem;
