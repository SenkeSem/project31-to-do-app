import HeadingStartPages from '../components/HeadingStartPages';
import ArrowLeft from '../components/icons/ArrowLeft.jsx';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button.jsx';

import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

const SignUpPage = () => {
  const methods = useForm({
    mode: 'onSubmit',
  });
  const { handleSubmit, reset } = methods;

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
    reset();
  };

  return (
    <div className="flex flex-col mt-4 pl-7 pr-5 pb-3">
      <ArrowLeft />
      <HeadingStartPages head={'Welcome'} text={'Sign up to continue'} />
      <img className="mx-auto mt-7" width={107} height={104} src="/circle.png" alt="circle" />

      <FormProvider onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-7" {...methods}>
        <Input
          id={'username'}
          label={'Username'}
          type={'email'}
          placeholder={'Enter your email'}
          validation={{
            required: 'Поле обязательно к заполнению!',
            minLength: {
              value: 5,
              message: 'Минимум 5 символов!',
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
        <Button type={'primary'}>Sign Up</Button>
        <Link to="/login" className="text-center">
          <Button type={'secondary'}>Sign In</Button>
        </Link>
      </FormProvider>
    </div>
  );
};

export default SignUpPage;
