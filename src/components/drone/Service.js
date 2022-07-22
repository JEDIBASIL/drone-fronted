import React from 'react'
import { MdSpeed,MdOutlineShield,MdIndeterminateCheckBox } from 'react-icons/md'

const Service = () => {
  return (
    <div className="service">
        <div  className='heading'>
        <h1>We deliver instantly</h1>
        <p>Our mission is to improve the world by making lightning-fast suburban deliveries affordable, green and safe.</p>
        </div>
        <div className='service-container'>
            <div className='content'>
            <i><MdSpeed/></i>
              <h3>Fast delivery</h3>
              <p>Fast and efficient drone to get your medications delivered on time</p>

            </div>
            <div className='content'>
            <i><MdSpeed/></i>
              <h3>Fast delivery</h3>
              <p>Fast and efficient drone to get your medications delivered on time</p>

            </div>
            <div className='content'>
            <i><MdOutlineShield/></i>
              <h3>Safety</h3>
              <p>Fast and efficient drone to get your medications delivered on time</p>

            </div>
            <div className='content'>
            <i><MdIndeterminateCheckBox/></i>
              <h3>Heavy weight</h3>
              <p>Fast and efficient drone to get your medications delivered on time</p>

            </div>
            <div className='content'>
            <i><MdSpeed/></i>
              <h3>Fast delivery</h3>
              <p>Fast and efficient drone to get your medications delivered on time</p>

            </div>
            <div className='content'>
            <i><MdSpeed/></i>
              <h3>Fast delivery</h3>
              <p>Fast and efficient drone to get your medications delivered on time</p>

            </div>
        </div>
    </div>
  )
}

export default Service