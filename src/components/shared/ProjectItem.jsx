const ProjectItem = ({ title, tasks, color }) => {
  return (
    <div className="w-40 h-44 p-6 rounded-md shadow-md shadow-shadowGray flex-shrink-0">
      <div
        className={`w-6 h-6 bg-${color} bg-opacity-40 rounded-full flex items-center justify-center`}>
        <div className={`w-3 h-3 bg-${color} rounded-full`}></div>
      </div>
      <h5 className="mt-11 italic font-thin text-lg">{title}</h5>
      <p className="mt-3 font-medium text-base text-textGray">{tasks} Tasks</p>
    </div>
  );
};

export default ProjectItem;
