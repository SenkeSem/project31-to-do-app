const ModalFilter = ({ children, setActive }) => {
  return (
    <div
      onClick={() => setActive(false)}
      className="w-screen h-screen bg-homeLineBlack bg-opacity-40 fixed left-0 top-0">
      <div
        onClick={(e) => e.stopPropagation()}
        className="p-4 rounded-lg bg-signUpWhite w-56 h-32 fixed top-24 right-5 text-base font-thin italic flex flex-col gap-3">
        {children}
      </div>
    </div>
  );
};

export default ModalFilter;
