import { useFormContext } from 'react-hook-form';

const Input = ({ label, type, style, placeholder, id, validation }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext();

  const inputTypes = {
    primary: 'w-full h-9 mt-3 border-b-2 border-b-inputGray font-normal text-base outline-none',
    createTaskPage:
      'bg-lightGray text-sm placeholder-homeLineBlack font-medium w-24 h-12 text-center rounded-full',
    createTaskPageTitle:
      'w-full bg-lightGray h-16 pl-7 italic font-thin text-xl placeholder-homeLineBlack',
  };

  return (
    <div>
      <label className="text-2xl font-medium">
        {label}
        <input
          {...register(id, validation)}
          type={type}
          className={inputTypes[style]}
          placeholder={placeholder}
        />

        {errors?.[id] && (
          <p className="h-4 mt-2 text-sm text-btnRed">{errors[id]?.message || 'Error!'}</p>
        )}
      </label>
    </div>
  );
};

export default Input;
