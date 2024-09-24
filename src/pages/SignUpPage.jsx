import HeadingStartPages from '../components/HeadingStartPages';
import ArrowLeft from '../components/icons/ArrowLeft.jsx';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button.jsx';
import Loader from '../components/loader/Loader.jsx';

import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { useSignUpMutation } from '../redux/slices/authSliceApi.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignUpPage = () => {
  const methods = useForm({
    mode: 'onSubmit',
  });
  const { handleSubmit } = methods;
  const navigation = useNavigate();

  const [signUp, { isLoading }] = useSignUpMutation();

  const onSubmit = async (data) => {
    try {
      let responce = await signUp({
        email: data.email,
        password: window.btoa(data.password),
        username: data.username,
      });

      if (responce?.error?.data === 'User is already exist') {
        toast.error('Choose a different nickname!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
      }

      if (responce.data) {
        toast.success('The user is registered!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
        setTimeout(() => navigation('/login'), 2000);
      }
    } catch (error) {
      toast.error('Registration error!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  return (
    <div className="flex flex-col mt-4 pl-7 pr-5 pb-3">
      <ArrowLeft onClick={() => navigation(-1)} />
      <HeadingStartPages head={'Welcome'} text={'Sign up to continue'} />
      <img className="mx-auto mt-7" width={107} height={104} src="/circle.png" alt="circle" />

      <FormProvider className="flex flex-col mt-7" {...methods}>
        <div className="mt-8">
          <Input
            id={'email'}
            label={'Email'}
            type={'email'}
            style={'primary'}
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
        </div>
        <div className="mt-8">
          <Input
            id={'username'}
            label={'Username'}
            type={'text'}
            style={'primary'}
            placeholder={'Enter your email'}
            validation={{
              required: 'Поле обязательно к заполнению!',
              minLength: {
                value: 5,
                message: 'Минимум 5 символов!',
              },
            }}
          />
        </div>
        <div className="mt-8">
          {' '}
          <Input
            id={'password'}
            label={'Password'}
            type={'password'}
            style={'primary'}
            placeholder={'Enter your password'}
            validation={{
              required: 'Поле обязательно к заполнению!',
              minLength: {
                value: 5,
                message: 'Минимум 5 символов!',
              },
            }}
          />
        </div>

        <div className="mt-5">
          <Button onClick={handleSubmit(onSubmit)} type={'primary'}>
            Sign Up
          </Button>
        </div>
        <Link to="/login" className="text-center">
          <Button type={'secondary'}>Sign In</Button>
        </Link>
      </FormProvider>
      {isLoading && <Loader />}
      <ToastContainer />
    </div>
  );
};

export default SignUpPage;
