import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import HeadingStartPages from '../components/HeadingStartPages';
import Input from '../components/shared/Input';
import ArrowLeft from '../components/icons/ArrowLeft.jsx';
import Button from '../components/shared/Button.jsx';

import { useLoginUserMutation } from '../redux/ToDoApi.js';

const SignInPage = () => {
  const methods = useForm({
    mode: 'onBlur',
  });

  const { handleSubmit } = methods;
  const navigate = useNavigate();

  const [loginUser, { isError }] = useLoginUserMutation();

  const onSubmit = async (data) => {
    // TODO: could you please add try catch for getting error, and add toast (check toast lib ) if you will get an error
    // TODO: add try/catch everywhere, where you're using requests
    let user = await loginUser({
      email: data.email,
      password: data.password,
    });
    localStorage.setItem('token', user.data.auth.sessionToken);
    navigate('/');

    console.log(user);
  };

  return (
    <div>
      <div className="flex flex-col h-full mt-4 pl-7 pr-5 pb-3">
        <ArrowLeft />
        <HeadingStartPages head={'Welcome back'} text={'Sign in to continue'} />

        <FormProvider {...methods} className="flex flex-col mt-7">
          <Input
            id={'email'}
            label={'Email'}
            type={'email'}
            placeholder={'Enter your email'}
            validation={{
              required: 'Поле обязательно к заполнению!',
              pattern: {
                value:
                  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                message: 'Вы ввели некорректный email',
              },
            }}
          />
          <Input
            id={'password'}
            label={'Password'}
            type={'password'}
            placeholder={'Enter your password'}
            validation={{
              required: 'Поле обязательно к заполнению!',
              minLength: {
                value: 5,
                message: 'Минимум 5 символов!',
              },
            }}
          />

          <Link to="/forgot" className="text-end">
            <Button className={'text-right mt-3 font-thin italic text-lg'} htmlType="submit">
              Forgot password
            </Button>
          </Link>

          <div className="mt-8">
            <Button onClick={handleSubmit(onSubmit)} type={'primary'}>
              Sign In
            </Button>
          </div>

          <Link to="/register" className="text-center">
            <Button className={'mt-12 text-lg italic font-bold text-btnRed'}>Sign Up</Button>
          </Link>
        </FormProvider>
      </div>
    </div>
  );
};

export default SignInPage;
