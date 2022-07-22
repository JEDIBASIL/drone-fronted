import React from 'react'
import { Burger,Button } from '@mantine/core'
import { Link } from 'react-router-dom'
import { GiDeliveryDrone } from 'react-icons/gi'

const HomeBar = ({menu, setMenu}) => {
  return (
    <nav>
        <Link className='logo' to={'/'}><GiDeliveryDrone/> JediDrone</Link>

       <div className='nav-control'>
        {/* <div className='btn'>
        <Button style={{backgroundColor: 'black'}}>LOG IN</Button>
        <Button style={{backgroundColor: 'black'}} color={'black'}>SIGN UP</Button>
        </div> */}
       <Burger opened={menu} onClick={()=>{setMenu(!menu)}}/>
       </div>
    </nav>
  )
}

export default HomeBar