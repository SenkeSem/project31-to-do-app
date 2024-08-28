import HeadingStartPages from '../components/HeadingStartPages';
import Input from '../components/shared/Input';
import ArrowLeft from '../components/icons/ArrowLeft.jsx';
import Button from '../components/shared/Button.jsx';

import { Link, useNavigate } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ForgotPasswordPage = () => {
  const navigation = useNavigate();

  const methods = useForm({
    mode: 'onChange',
  });

  const { handleSubmit } = methods;

  const onSubmit = () => {
    toast.info('A message with a code has been sent to your email!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
    setTimeout(() => navigation('/reset'), 5000);
  };

  return (
    <div>
      <div className="flex flex-col h-full mt-4 pl-7 pr-5 pb-3">
        <Link to="/login">
          <ArrowLeft />
        </Link>

        <HeadingStartPages
          head={'Forgot Password'}
          text={'Please enter your email below to recevie your password reset instructions'}
        />

        <FormProvider {...methods} className="flex flex-col mt-7">
          <div className="mt-8">
            <Input
              id={'username'}
              label={'Username'}
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
          <div className="mt-10">
            <Button onClick={handleSubmit(onSubmit)} type={'primary'}>
              Send Request
            </Button>
          </div>
        </FormProvider>
        <ToastContainer />
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
