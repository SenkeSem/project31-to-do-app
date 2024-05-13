import GetStartedLogo1 from '../components/icons/GetStartedLogo1.jsx';

const StartPage1 = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      <GetStartedLogo1 />
      <h2 className="text-2xl italic font-thin mt-12 z-10">Welcome to todo list</h2>
      <p className="mt-3 font-medium z-10">Whats going to happen tomorrow?</p>
      <div className="z-10">пагинация</div>
      <button className="w-72 h-12 rounded z-10 bg-signUpWhite italic font-thin text-lg drop-shadow-2xl">
        Get Started
      </button>
      <img className="absolute z-0 -bottom-0 -left-0" src="/public/red.png" alt="red" />
    </div>
  );
};

export default StartPage1;
