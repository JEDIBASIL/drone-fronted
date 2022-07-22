import mobileMockup from '../../img/Rectangle.png'

const Ads = () => {
  return (
    <div className='Ads'>
        <img src={mobileMockup} alt="" />
        <div className='text'>
            <h1>Get your parcel delivered using your mobile phone</h1>
            <p className='sub' >Let's help ease the stress of tranporting with our smart drone</p>
            <button>SIGN UP FOR FREE</button>
        </div>
    </div>
  )
}

export default Ads