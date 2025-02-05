import PropTypes from 'prop-types';
import '../App.css'
const Score = ({score}) => {
    return ( 
        <div>
             <h2 data-testid="score" className='score'>YOUR SCORE 🤪 = {score}</h2>
        </div>
     );
}
 
Score.propTypes = {
     score : PropTypes.number
}
export default Score;