const Input = ({ label, type, placeholder }) => {
  return (
    <div className="mt-8">
      <label className="text-2xl font-medium">
        {label}
        <input
          type={type}
          className="w-full h-9 mt-3 border-b-2 border-b-inputGray font-normal text-base"
          placeholder={placeholder}
        />
      </label>
    </div>
  );
};

export default Input;
