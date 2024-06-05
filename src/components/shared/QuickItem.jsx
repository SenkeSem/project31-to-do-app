const QuickItem = ({ children, color }) => {
  const quickType = {
    blue: 'bg-todoBlue',
    green: 'bg-projectGreen',
    red: 'bg-projectRed',
    purple: 'bg-projectPurple',
  };

  return (
    <div className="pt-4 pl-8 pr-5 pb-5 rounded-md shadow-xl shadow-shadowGray relative italic font-thin text-base">
      <div className={`${quickType[color]} w-32 h-1 absolute top-0 left-8`}></div>
      {children}
    </div>
  );
};

export default QuickItem;
