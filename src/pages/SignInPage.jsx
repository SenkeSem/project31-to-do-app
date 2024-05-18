import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';
import HeadingStartPages from '../components/HeadingStartPages';
import Input from '../components/shared/Input';
import ArrowLeft from '../components/icons/ArrowLeft.jsx';
import Button from '../components/shared/Button.jsx';


const SignInPage = () => {
  const methods = useForm({
    mode: 'onBlur',
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = methods

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div>
      <div className="flex flex-col h-full mt-4 pl-7 pr-5 pb-3">
        <ArrowLeft />
        <HeadingStartPages head={'Welcome back'} text={'Sign in to continue'} />

        <FormProvider {...methods} className="flex flex-col mt-7" onSubmit={handleSubmit(onSubmit)}>
          <Input
            register={register}
            errors={errors}
            label={'Username'}
            type={'email'}
            placeholder={'Enter your email'}
          />
          <Input
            register={register}
            errors={errors}
            label={'Password'}
            type={'password'}
            placeholder={'Enter your password'}
          />

          <Link to="/forgot" className="text-end">
            <Button
              className={'text-right mt-3 font-thin italic text-lg'}
              htmlType="submit"
            >Forgot password</Button>
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
        </FormProvider>
      </div>
    </div>
  );
};

export default SignInPage;
