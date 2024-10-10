import './Loader.css';

const Loader = () => {
  return (
    <div className="w-screen h-screen bg-homeLineBlack bg-opacity-40 fixed left-0 top-0 flex items-center justify-center">
      <div>
        <span className="loader" />;
      </div>
    </div>
  );
};

export default Loader;
