import HeadingStartPages from '../components/layout/HeadingStartPages';
import Input from '../components/shared/Input';
import ArrowLeft from '../components/icons/ArrowLeft.jsx';
import Button from '../components/shared/Button.jsx';

import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ResetPasswordPage = () => {
  const methods = useForm({ mode: 'onChange' });

  const { handleSubmit } = methods;
  const onSubmit = (data) => {
    data.newPassword === data.password
      ? toast.success('The password has been changed!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        })
      : toast.error("Passwords don't match!", {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'light',
        });
  };

  return (
    <div>
      <div>
        <div className="flex flex-col h-full mt-4 pl-7 pr-5 pb-3">
          <Link to="/forgot">
            <ArrowLeft />
          </Link>

          <HeadingStartPages
            head={'Reset Password'}
            text={
              'Reset code was sent to your email. Please enter the code and create new password'
            }
          />

          <FormProvider {...methods} className="flex flex-col mt-7">
            <div className="mt-8">
              <Input
                id={'code'}
                label={'Reset code'}
                type={'number'}
                style={'primary'}
                placeholder={'Enter your code'}
                validation={{
                  required: 'Поле обязательно к заполнению!',
                  minLength: {
                    value: 4,
                    message: 'Минимум 4 символов!',
                  },
                }}
              />
            </div>
            <div className="mt-8">
              <Input
                id={'newPassword'}
                type={'password'}
                style={'primary'}
                label={'New password'}
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
            <div className="mt-8">
              <Input
                id={'password'}
                type={'password'}
                style={'primary'}
                label={'Confirm password'}
                placeholder={'Enter your confirm password'}
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
              <Button onClick={handleSubmit(onSubmit)} type={'primary'}>
                Change password
              </Button>
            </div>
          </FormProvider>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ResetPasswordPage;
