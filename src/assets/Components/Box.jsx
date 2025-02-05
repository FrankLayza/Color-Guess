import '../../App.css'
import PropTypes from 'prop-types';
const Box = ({boxColor}) => {
  return (
    <div className="box-container" data-testid='colorBox' style={{backgroundColor: boxColor}}></div>
  );
};

Box.propTypes = {
  boxColor : PropTypes.string
}
export default Box;
