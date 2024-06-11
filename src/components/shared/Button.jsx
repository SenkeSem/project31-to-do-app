const Button = ({ isActive, children, type, disabled, ...props }) => {
  const buttonTypes = {
    primary: 'bg-btnRed w-full h-12 italic text-lg font-thin text-signUpWhite rounded',
    secondary: 'mt-12 text-lg italic font-bold text-btnRed',
    bigBlue: 'bg-todoBlue w-20 h-20 mt-6 rounded-lg font-thin text-2xl italic text-signUpWhite',
    smallBlue: 'w-24 h-8 bg-todoBlue rounded-lg text-signUpWhite text-sm font-medium',
    addedItem: 'text-base italic font-thin mt-6',
    circleGray: 'bg-buttonGray w-8 h-8 rounded-full flex items-center justify-center',
  };

  return (
    <button onClick={isActive} disabled={disabled} className={buttonTypes[type]} {...props}>
      {children}
    </button>
  );
};

export default Button;
