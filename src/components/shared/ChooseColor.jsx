import WhiteCheck from '../icons/WhiteCheck';

const ChooseColor = ({ colorArray, activeColor, setColor }) => {
  const color = colorArray;

  return (
    <>
      <h4 className="text-lg italic font-thin">Choose Color</h4>
      <div className="flex gap-3 mt-4">
        {color.map((item, id) => (
          <div
            key={item}
            style={{ backgroundColor: `${item}` }}
            onClick={() => setColor(id)}
            className={`w-12 h-12 cursor-pointer rounded-lg flex items-center justify-center`}>
            {id === activeColor && <WhiteCheck />}
          </div>
        ))}
      </div>
    </>
  );
};

export default ChooseColor;
