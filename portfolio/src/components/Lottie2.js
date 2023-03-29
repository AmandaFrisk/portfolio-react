// import "./LottieStyles.css"
import { Player } from '@lottiefiles/react-lottie-player';

const Lottie2 = () => {
    return (
      <div className='lottie1-container'>
        
  
        <Player
          src='https://assets2.lottiefiles.com/packages/lf20_uhoBnYFtuw.json'
          className="player"
          loop
          autoplay
          style={{ height: '400px', width: '400px'}}
        />
  
      </div>
    )
  }
  
  export default Lottie2