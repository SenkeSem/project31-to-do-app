import HeadingStartPages from '../components/HeadingStartPages';
import Input from '../components/shared/Input';
import ArrowLeft from '../components/icons/ArrowLeft.jsx';
import Button from '../components/shared/Button.jsx';

import { Link } from 'react-router-dom';

const SignInPage = () => {
  return (
    <div>
      <div className="flex flex-col h-full mt-4 pl-7 pr-5 pb-3">
        <ArrowLeft />
        <HeadingStartPages head={'Welcome back'} text={'Sign in to continue'} />

        <form className="flex flex-col mt-7">
          <Input label={'Username'} type={'email'} placeholder={'Enter your email'} />
          <Input label={'Password'} type={'password'} placeholder={'Enter your password'} />

          <Link to="/forgot" className="text-end">
            <Button className={'text-right mt-3 font-thin italic text-lg'}>Forgot password</Button>
          </Link>

          <Button
            className={
              'bg-btnRed w-full h-12 mt-16 italic text-lg font-thin text-signUpWhite rounded'
            }>
            Sign In
          </Button>

          <Link to="/" className="text-center">
            <Button className={'mt-12 text-lg italic font-bold text-btnRed'}>Sign Up</Button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default SignInPage;
