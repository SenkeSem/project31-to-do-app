const ModalCreate = ({ children, setActive }) => {
  return (
    <div
      onClick={() => setActive(false)}
      className="w-screen h-screen bg-homeLineBlack bg-opacity-40 fixed left-0 top-0 flex items-center justify-center">
      <div
        onClick={(e) => e.stopPropagation()}
        className="rounded-lg bg-signUpWhite w-64 h-48 text-lg font-thin italic flex flex-col items-center justify-between">
        {children}
      </div>
    </div>
  );
};

export default ModalCreate;
