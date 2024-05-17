const Input = ({ register, errors, label, type, placeholder }) => {
  return (
    <div className="mt-8">
      <label className="text-2xl font-medium">
        {label}
        <input
          {...register(`${label}`, {
            required: 'Поле обязательно к заполнению!',
            minLength: {
              value: 5,
              message: 'Минимум 5 символов!',
            },
          })}
          type={type}
          className="w-full h-9 mt-3 border-b-2 border-b-inputGray font-normal text-base"
          placeholder={placeholder}
        />

        {errors[`${label}`] && (
          <p className="h-4 mt-2 text-sm text-btnRed">{errors[`${label}`].message || 'Error!'}</p>
        )}
      </label>
    </div>
  );
};

export default Input;
