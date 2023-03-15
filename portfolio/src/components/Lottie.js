import "./LottieStyles.css"
import { Player } from '@lottiefiles/react-lottie-player';

const Lottie = () => {
    return (
      <div className='lottie-container'>
        
  
        <Player
          src='https://assets5.lottiefiles.com/packages/lf20_kHcgEqT4Li.json'
          className="player"
          loop
          autoplay
        />
  
      </div>
    )
  }
  
  export default Lottie