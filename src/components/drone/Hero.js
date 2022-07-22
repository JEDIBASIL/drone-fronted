import HeroImg1 from '../../img/droneImg1.jpg'
import HeroImg2 from '../../img/droneImg2.jpg'
import HeroImg3 from '../../img/droneImg3.jpg'
import HeroImg4 from '../../img/droneImg4.jpg'
import droneVideo from '../../img/production ID 3764259(1).mp4'

export const Hero = () => {
  return (
    <div className='hero'>
        <div className='text'>
            <div>
            <p><span>FAST &</span> <span>RELIABLE</span></p>
            <h1>Happiness delivered,</h1>
           <h1>Let us take the weight
           off your shoulders!</h1>
            </div>
            <p className='sub' >Let's help ease the stress of tranporting with our smart drone</p>
            <button>SIGN UP FOR FREE</button>
        </div>
        <div className='img-container '>
            {/* <img src={HeroImg1} alt="" /> */}
            <video autoPlay loop muted src={droneVideo}></video>
            <img className='big-img' src={HeroImg2} alt="" />
            <img src={HeroImg4} alt="" />
        </div>
    </div>
  )
}
