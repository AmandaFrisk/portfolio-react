import { Player } from '@lottiefiles/react-lottie-player';

const Lottie3 = () => {
    return (
      <div className='flex flex-col item-center justify-center '>
        
  
        <Player
          src='https://assets6.lottiefiles.com/packages/lf20_hmpbxlzn.json'
          className="player"
          loop
          autoplay
          style={{ height: '250px', width: '250px'}}
        />
  
      </div>
    )
  }
  
  export default Lottie3