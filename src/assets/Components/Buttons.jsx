import "../../App.css";
import PropTypes from 'prop-types';
const ColorButtons = ({ allColors, check }) => {
  return (
    <div className="group">
      {allColors.map((color, index) => (
        <button
          key={index}
          data-testid="colorOption"
          className="colorBtn"
          style={{ backgroundColor: color,
            borderWidth: '2px',
            borderColor: color
           }}
          onClick={() => {
            check(color);
          }}
        >
          PICK ME
        </button>
      ))}
    </div>
  );
};

ColorButtons.propTypes = {
  allColors: PropTypes.array,
  check: PropTypes.func
}
export default ColorButtons;
