import "./LottieStyles.css"
import { Player } from '@lottiefiles/react-lottie-player';

const Lottie1 = () => {
    return (
      <div className=' w -fit h-fit padding-bottom:0px z-999 '>
        
  
        <Player
          // src='https://assets5.lottiefiles.com/packages/lf20_kHcgEqT4Li.json'
         src="https://assets3.lottiefiles.com/packages/lf20_llbjwp92qL.json"
          className="player"
          // loop
          autoplay
          style={{ height: '200px', width: '200px'}}
        />
  
      </div>
    )
  }
  
  export default Lottie1