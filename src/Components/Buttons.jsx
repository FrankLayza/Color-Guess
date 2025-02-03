const ColorButtons = ({ changeColor, allColors, check }) => {
  return (
    <div>
      {allColors.map((color, index) => (
        <button
          key={index}
          className="p-2 transition-transform hover:scale-110 border-2 py-3 px-6 mx-3"
          style={{ backgroundColor: color }}
          onClick={()=> {
            changeColor();
            check(color);
          }}
        >
          {color}
        </button>
      ))}
    </div>
  );
};

export default ColorButtons;
