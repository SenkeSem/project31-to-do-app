import GetStartedLogo2 from '../assets/GetStartedLogo2.png';

const StartPage2 = () => {
  return (
    <div className="flex flex-col items-center pt-10">
      {/* TODO: add import of img like on the top */}
      <img width={314} src={GetStartedLogo2} alt="GetStartedLogo2" />
      <h2 className="text-2xl italic font-thin mt-12 z-10">Work happens</h2>
      <p className="mt-3 font-medium z-10">Get notified when work happens.</p>
      <div className="z-10">пагинация</div>
      <button className="absolute bottom-16 w-72 h-12 rounded z-10 bg-signUpWhite italic font-thin text-lg drop-shadow-2xl">
        Get Started
      </button>
      <img
        className="absolute h-80 w-screen z-0 bottom-0 left-0"
        src="/public/blue.png"
        alt="blue"
      />
    </div>
  );
};

export default StartPage2;
