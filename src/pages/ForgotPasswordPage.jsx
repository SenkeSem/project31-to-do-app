import HeadingStartPages from '../components/HeadingStartPages';
import Input from '../components/shared/Input';
import ArrowLeft from '../components/icons/ArrowLeft.jsx';
import Button from '../components/shared/Button.jsx';

import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

const ForgotPasswordPage = () => {
  const methods = useForm({
    mode: 'onChange',
  });

  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
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
          <Input
            id={'username'}
            label={'Username'}
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
          <div className="mt-10">
            <Button onClick={handleSubmit(onSubmit)} type={'primary'}>
              <Link to="/reset" className="flex justify-center">
                Send Request
              </Link>
            </Button>
          </div>
        </FormProvider>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
