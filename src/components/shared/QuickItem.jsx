const QuickItem = ({ children, color }) => {
  return (
    <div className="pt-4 pl-8 pr-5 pb-5 rounded-md shadow-xl shadow-shadowGray relative font-thin text-base">
      <div
        style={{ backgroundColor: `${color}` }}
        className={'w-32 h-1 absolute top-0 left-8'}></div>
      {children}
    </div>
  );
};

export default QuickItem;
