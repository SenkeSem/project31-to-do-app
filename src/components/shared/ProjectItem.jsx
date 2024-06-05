const ProjectItem = ({ title, tasks, color }) => {
  const itemType = {
    blue: 'bg-todoBlue',
    green: 'bg-projectGreen',
    red: 'bg-projectRed',
    purple: 'bg-projectPurple',
  };

  return (
    <div className="w-full h-44 p-6 rounded-md shadow-md shadow-shadowGray">
      <div
        className={`w-6 h-6 ${itemType[color]} bg-opacity-40 rounded-full flex items-center justify-center`}>
        <div className={`w-3 h-3 ${itemType[color]} rounded-full`}></div>
      </div>
      <h5 className="mt-11 italic font-thin text-lg">{title}</h5>
      <p className="mt-3 font-medium text-base text-textGray">{tasks} Tasks</p>
    </div>
  );
};

export default ProjectItem;
