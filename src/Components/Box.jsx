const Box = ({boxColor}) => {
  return (
    <div className="w-40 h-32 rounded-lg shadow-lg  border border-black mb-5" style={{backgroundColor: boxColor}}></div>
  );
};

export default Box;
