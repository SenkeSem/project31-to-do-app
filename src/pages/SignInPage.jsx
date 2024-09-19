import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import HeadingStartPages from '../components/HeadingStartPages';
import Input from '../components/shared/Input';
import ArrowLeft from '../components/icons/ArrowLeft.jsx';
import Button from '../components/shared/Button.jsx';
import Loader from '../components/loader/Loader.jsx';

import { useSignInMutation } from '../redux/ToDoApi.js';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SignInPage = () => {
  const methods = useForm({
    mode: 'onBlur',
  });

  const { handleSubmit } = methods;
  const navigate = useNavigate();

  const [signIn, { isLoading }] = useSignInMutation();

  const onSubmit = async (data) => {
    try {
      let user = await signIn({
        email: data.email,
        password: window.btoa(data.password),
      });

      localStorage.setItem('user_id', user.data.data.user_id);
      localStorage.setItem('access_token', user.data.data.access_token);
      localStorage.setItem('refresh_token', user.data.data.refresh_token);
      localStorage.setItem('expires_in', user.data.data.expires_in);
      localStorage.setItem('email', data.email);
      toast.success('The user in the system!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
      setTimeout(() => navigate('/'), 3000);
    } catch (error) {
      console.log(error);

      toast.error('Invalid credentials!', {
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
    <div>
      <div className="flex flex-col h-full mt-4 pl-7 pr-5 pb-3">
        <ArrowLeft onClick={() => navigate(-1)} />
        <HeadingStartPages head={'Welcome back'} text={'Sign in to continue'} />

        <FormProvider {...methods} className="flex flex-col mt-7">
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
      <ToastContainer />
      {isLoading && <Loader />}
    </div>
  );
};

export default SignInPage;
