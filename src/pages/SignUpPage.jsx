import HeadingStartPages from '../components/HeadingStartPages';

import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="flex flex-col mt-4 pl-7 pr-5 pb-3">
      <img width={25} height={17} src="/public/arrowLeft.svg" alt="arrow" />

      <HeadingStartPages head={'Welcome'} text={'Sign up to continue'} />
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
        <button className="mt-12 text-lg italic font-bold text-btnRed">
          <Link to="/login">Sign In</Link>
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
