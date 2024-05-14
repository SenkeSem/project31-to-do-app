import HeadingStartPages from '../components/HeadingStartPages';
import Input from '../components/shared/Input';

import { Link } from 'react-router-dom';

const ForgotPasswordPage = () => {
  return (
    <div>
      <div className="flex flex-col h-full mt-4 pl-7 pr-5 pb-3">
        <Link to="/login">
          <img width={25} height={17} src="/arrowLeft.svg" alt="arrow" />
        </Link>

        <HeadingStartPages
          head={'Forgot Password'}
          text={'Please enter your email below to recevie your password reset instructions'}
        />

        <form className="flex flex-col mt-7">
          <Input label={'Username'} type={'email'} placeholder={'Enter your email'} />

          <button className="bg-btnRed w-full h-12 mt-16 italic text-lg font-thin text-signUpWhite rounded">
            <Link to="/reset">Send Request</Link>
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
