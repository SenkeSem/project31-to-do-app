const Button = ({ children, type, disabled, ...props }) => {
  const buttonTypes = {
    primary: 'bg-btnRed w-full h-12 mt-16 italic text-lg font-thin text-signUpWhite rounded',
    secondary: 'mt-12 text-lg italic font-bold text-btnRed',
  };

  return (
    <button disabled={disabled} className={buttonTypes[type]} {...props}>
      {children}
    </button>
  );
};

export default Button;
