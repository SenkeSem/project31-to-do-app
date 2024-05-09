const SignUpPage = () => {
  return (
    <div className="flex flex-col mt-4 pl-7 pr-5 pb-3">
      <img width={25} height={17} src="/public/arrowLeft.svg" alt="arrow" />

      <h1 className="mt-16 text-3xl italic font-thin">Welcome</h1>
      <p className="mt-3 text-base font-medium text-signUpGray">Sign up to continue</p>

      <img
        className="mx-auto mt-7"
        width={107}
        height={104}
        src="/public/circle.png"
        alt="circle"
      />

      <form className="flex flex-col mt-7">
        <p className="text-2xl font-medium">Username</p>
        <input
          className="h-9 mt-3 border-b-2 border-b-inputGray"
          type="email"
          placeholder="Enter your email"
        />

        <p className="mt-8 text-2xl font-medium">Password</p>
        <input
          className="h-9 mt-3 border-b-2 border-b-inputGray"
          type="password"
          placeholder="Enter your password"
        />

        <button className="bg-btnRed w-full h-12 mt-16 italic text-lg font-thin text-signUpWhite rounded">
          Sign Up
        </button>
        <button className="mt-12 text-lg italic font-bold text-btnRed">Sign In</button>
      </form>
      <div className="mt-14 mx-auto w-24 h-1 bg-homeLineBlack"></div>
    </div>
  );
};

export default SignUpPage;
