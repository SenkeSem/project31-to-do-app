const Modal = ({ children, setActive }) => {
  return (
    <div
      onClick={() => setActive(false)}
      className="w-screen h-screen bg-homeLineBlack bg-opacity-40 fixed left-0 top-0 flex items-center justify-center z-30">
      <div onClick={(e) => e.stopPropagation()} className="rounded-lg bg-signUpWhite ">
        {children}
      </div>
    </div>
  );
};

export default Modal;
