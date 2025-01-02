const ProjectSearchItem = ({ title, onClick, color }) => {
  return (
    <div
      onClick={onClick}
      className="flex items-center gap-4 relative w-full h-4 p-6 rounded-md shadow-md shadow-shadowGray cursor-pointer hover:bg-homeLineBlack hover:bg-opacity-20">
      <div className="relative w-6 h-6">
        <div
          style={{ backgroundColor: `${color}`, opacity: '.4' }}
          className={'w-6 h-6 rounded-full'}></div>
        <div
          style={{ backgroundColor: `${color}` }}
          className={'w-3 h-3 rounded-full absolute top-[25%] left-[25%]'}></div>
      </div>
      <h5 className="italic font-thin text-sm">{title}</h5>
    </div>
  );
};

export default ProjectSearchItem;
