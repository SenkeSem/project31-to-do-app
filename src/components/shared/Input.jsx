import {useFormContext} from "react-hook-form";

const Input = ({ label, type, placeholder, id, validation }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext()

  return (
    <div className="mt-8">
      <label className="text-2xl font-medium">
        {label}
        <input
          {...register(id, validation)}
          type={type}
          className="w-full h-9 mt-3 border-b-2 border-b-inputGray font-normal text-base outline-none"
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
