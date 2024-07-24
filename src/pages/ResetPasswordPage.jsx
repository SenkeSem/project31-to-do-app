import HeadingStartPages from '../components/HeadingStartPages';
import Input from '../components/shared/Input';
import ArrowLeft from '../components/icons/ArrowLeft.jsx';
import Button from '../components/shared/Button.jsx';

import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

const ResetPasswordPage = () => {
  const methods = useForm({ mode: 'onChange' });

  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
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
                id={'username'}
                label={'Reset code'}
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
    </div>
  );
};

export default ResetPasswordPage;
