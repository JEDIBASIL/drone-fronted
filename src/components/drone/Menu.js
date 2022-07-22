import { Link,useLocation } from 'react-router-dom'
import { Burger } from '@mantine/core'

const Menu = ({menu,setMenu}) => {
    const location = useLocation()
  return (
    <div className={menu === true ? 'menu showMenu' : 'menu'}>
      <div className='burger'>
      <Burger opened={menu} onClick={()=>{setMenu(!menu)}} className={menu=== true ? 'burger-icon toggleBurge' : 'burger-icon'}/>
      </div>
        <ul>
            <li><Link className={location.pathname === '/'  ? 'active-link' : ''} to={'/'}>HOME</Link></li>
            <li><Link to={'/'}>ABOUT</Link></li>
            <li><Link to={'/'}>FAQ'S</Link></li>
            <li><Link to={'/'}>CONTACT</Link></li>
        </ul>
    </div>
  )
}

export default Menu