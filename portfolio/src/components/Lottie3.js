import { Player } from '@lottiefiles/react-lottie-player';

const Lottie3 = () => {
    return (
      <div className='h-fit'>
        
  
        <Player
          src='https://assets6.lottiefiles.com/packages/lf20_hmpbxlzn.json'
          className="player"
          loop
          autoplay
          style={{ height: '300px', width: '300px'}}
        />
  
      </div>
    )
  }
  
  export default Lottie3