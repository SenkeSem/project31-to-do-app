import HeadingStartPages from '../components/HeadingStartPages';
import ArrowLeft from '../components/icons/ArrowLeft.jsx';
import Input from '../components/shared/Input';
import Button from '../components/shared/Button.jsx';

import { Link } from 'react-router-dom';
import { useForm, FormProvider } from 'react-hook-form';

import { useCreateUserMutation } from '../redux/ToDoApi.js';

const SignUpPage = () => {
  const methods = useForm({
    mode: 'onSubmit',
  });
  const { handleSubmit, reset } = methods;

  // TODO: get loading from here and show loader for button or common loader
  const [createUser] = useCreateUserMutation();

  const onSubmit = async (data) => {
    // TODO: try/catch
    await createUser({
      email: data.email,
      password: data.password,
      username: data.username,
    });
    reset();
  };

  return (
    <div className="flex flex-col mt-4 pl-7 pr-5 pb-3">
      <ArrowLeft />
      <HeadingStartPages head={'Welcome'} text={'Sign up to continue'} />
      <img className="mx-auto mt-7" width={107} height={104} src="/circle.png" alt="circle" />

      <FormProvider className="flex flex-col mt-7" {...methods}>
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
          id={'username'}
          label={'Username'}
          type={'text'}
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
        <div className="mt-5">
          <Button onClick={handleSubmit(onSubmit)} type={'primary'}>
            Sign Up
          </Button>
        </div>
        <Link to="/login" className="text-center">
          <Button type={'secondary'}>Sign In</Button>
        </Link>
      </FormProvider>
    </div>
  );
};

export default SignUpPage;
