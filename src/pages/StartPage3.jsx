const StartPage3 = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      <img width={282} src="/src/assets/GetStartedLogo3.png" alt="GetStartedLogo2" />
      <h2 className="text-2xl italic font-thin mt-12 z-10">Tasks and assign</h2>
      <p className="mt-3 font-medium z-10">Task and assign them to colleagues.</p>
      <div className="z-10">пагинация</div>
      <button className="absolute bottom-16 w-72 h-12 rounded z-10 bg-signUpWhite italic font-thin text-lg drop-shadow-2xl">
        Get Started
      </button>
      <img
        className="absolute h-80 w-screen z-0 bottom-0 left-0"
        src="/public/purple.png"
        alt="purple"
      />
    </div>
  );
};

export default StartPage3;
