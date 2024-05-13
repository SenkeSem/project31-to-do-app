import HeadingStartPages from '../components/HeadingStartPages';

import { Link } from 'react-router-dom';

const ResetPasswordPage = () => {
  return (
    <div>
      <div>
        <div className="flex flex-col h-full mt-4 pl-7 pr-5 pb-3">
          <Link to="/forgot">
            <img width={25} height={17} src="/arrowLeft.svg" alt="arrow" />
          </Link>

          <HeadingStartPages
            head={'Reset Password'}
            text={
              'Reset code was sent to your email. Please enter the code and create new password'
            }
          />

          <form className="flex flex-col mt-7">
            <p className="text-2xl font-medium">Reset code</p>
            <input
              className="h-9 mt-3 border-b-2 border-b-inputGray"
              type="email"
              placeholder="Enter your number"
            />

            <p className="mt-8 text-2xl font-medium">New password</p>
            <input
              className="h-9 mt-3 border-b-2 border-b-inputGray"
              type="password"
              placeholder="Enter your password"
            />

            <p className="mt-8 text-2xl font-medium">Confirm password</p>
            <input
              className="h-9 mt-3 border-b-2 border-b-inputGray"
              type="password"
              placeholder="Enter your confirm password"
            />

            <button className="bg-btnRed w-full h-12 mt-16 italic text-lg font-thin text-signUpWhite rounded">
              Change password
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPasswordPage;
