const Button = ({ children, type, disabled, ...props }) => {
  const buttonTypes = {
    primary: 'bg-btnRed w-full h-12 mt-16 italic text-lg font-thin text-signUpWhite rounded',
    secondary: 'mt-12 text-lg italic font-bold text-btnRed',
    bigBlue: 'bg-todoBlue w-20 h-20 mt-6 rounded-lg font-thin text-2xl italic text-signUpWhite',
    addedItem: 'text-base italic font-thin mt-6',
  };

  return (
    <button disabled={disabled} className={buttonTypes[type]} {...props}>
      {children}
    </button>
  );
};

export default Button;
