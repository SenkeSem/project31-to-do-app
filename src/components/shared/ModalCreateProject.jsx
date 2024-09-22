const ModalCreateProject = ({ children, setActive }) => {
  // TODO: create one component for Modal and use this Calendar info inside <Modal>{children}</Modal>
  return (
    <div
      onClick={() => setActive(false)}
      className="w-screen h-screen bg-homeLineBlack bg-opacity-40 fixed left-0 top-0 flex items-center justify-center">
      <div onClick={(e) => e.stopPropagation()} className="rounded-lg bg-signUpWhite w-80 h-80 p-6">
        {children}
      </div>
    </div>
  );
};

export default ModalCreateProject;
