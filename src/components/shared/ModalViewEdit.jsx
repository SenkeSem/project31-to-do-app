const ModalViewEdit = ({ children, setActive }) => {
  // TODO: create one component for Modal and use this Calendar info inside <Modal>{children}</Modal>
  return (
    <div
      onClick={() => setActive(false)}
      className="w-screen h-screen bg-homeLineBlack bg-opacity-40 fixed left-0 top-0">
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-lg bg-signUpWhite w-[228px] h-[130px] text-[17px] font-thin italic absolute top-20 right-16 pb-[22px] pt-[14px] px-4 flex flex-col justify-between cursor-pointer">
        {children}
      </div>
    </div>
  );
};

export default ModalViewEdit;
