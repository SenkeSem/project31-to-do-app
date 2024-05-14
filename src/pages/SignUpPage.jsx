import HeadingStartPages from '../components/HeadingStartPages';
import ArrowLeft from '../components/icons/ArrowLeft.jsx';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button.jsx';

import { Link } from 'react-router-dom';

const SignUpPage = () => {
  return (
    <div className="flex flex-col mt-4 pl-7 pr-5 pb-3">
      <ArrowLeft />
      <HeadingStartPages head={'Welcome'} text={'Sign up to continue'} />
      <img className="mx-auto mt-7" width={107} height={104} src="/circle.png" alt="circle" />

      <form className="flex flex-col mt-7">
        <Input label={'Username'} type={'email'} placeholder={'Enter your email'} />
        <Input label={'Password'} type={'password'} placeholder={'Enter your password'} />

        <Button
          className={
            'bg-btnRed w-full h-12 mt-16 italic text-lg font-thin text-signUpWhite rounded'
          }>
          Sign Up
        </Button>

        <Link to="/login" className="text-center">
          <Button className={'mt-12 text-lg italic font-bold text-btnRed'}>Sign In</Button>
        </Link>
      </form>
    </div>
  );
};

export default SignUpPage;
