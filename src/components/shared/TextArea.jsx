const TextArea = ({ value, setValue, type, name, id, placeholder, ...props }) => {
  const textAreaTypes = {
    notePage: 'w-full h-36 font-medium text-base text-homeLineBlack mt-3 p-1',
    taskPage: 'w-full h-full border-[1px] border-borderGray rounded-t-xl p-3',
    viewTaskPage:
      'w-full h-full border-[1px] border-borderGray rounded-t-xl pt-[18px] pl-4 resize-none',
    checkListPage: 'w-full h-12 font-medium text-base text-homeLineBlack mt-3',
  };

  return (
    <textarea
      value={value}
      onChange={(e) => setValue(e.target.value)}
      className={textAreaTypes[type]}
      name={name}
      placeholder={placeholder}
      id={id}
      {...props}
    />
  );
};

export default TextArea;
