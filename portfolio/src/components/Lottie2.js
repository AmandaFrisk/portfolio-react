// import "./LottieStyles.css"
import { Player } from '@lottiefiles/react-lottie-player';

const Lottie2 = () => {
    return (
      <div className='lottie1-container'>
        
  
        <Player
          src='https://assets2.lottiefiles.com/packages/lf20_uhoBnYFtuw.json'
          className="player mx-auto w-1 h-1"
          loop
          autoplay
          style={{ height: '100px', width: '100px'}}
        />
  
      </div>
    )
  }
  
  export default Lottie2