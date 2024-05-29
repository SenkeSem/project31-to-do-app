const ToDo = ({ title }) => {
  return (
    <div className=" h-16 flex items-center mr-4 ml-4 mb-4   shadow-md shadow-shadowGray">
      <img className="ml-6 cursor-pointer" src="/public/blueCircle.svg" alt="blueCircle" />
      <main className="ml-6">
        <h5 className="text-base font-medium">{title}</h5>
        <p className="text-signUpGray font-medium text-base">9:00am</p>
      </main>
      <div className="w-1 h-5 bg-todoBlue ml-auto"></div>
    </div>
  );
};

export default ToDo;
