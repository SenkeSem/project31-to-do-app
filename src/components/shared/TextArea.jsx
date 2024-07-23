const TextArea = ({ type, name, id, placeholder, ...props }) => {
  const textAreaTypes = {
    notePage: 'w-full h-36 font-medium text-base text-homeLineBlack mt-3',
    taskPage: 'w-full h-full border-[1px] border-borderGray rounded-t-xl',
  };

  return (
    <textarea
      className={textAreaTypes[type]}
      name={name}
      placeholder={placeholder}
      id={id}
      {...props}
    />
  );
};

export default TextArea;