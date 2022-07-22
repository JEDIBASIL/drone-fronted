import { GiDeliveryDrone } from 'react-icons/gi'
import {FaTwitter,FaInstagram,FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <footer>
        <div className='footer-top'>
            <a href=""><GiDeliveryDrone/></a>
            <button>SIGN UP</button>
        </div>
        <div className='footer-content'>
            <ul>
                <h3>Resources</h3>
                <li>
                    <a href="">FAQ's</a>
                </li>
                <li>
                    <a href="">Privacy</a>
                    </li>
                <li>   
                    <a href="">Terms & conditions</a>
                    </li>
            </ul>
            <ul>
                <h3>Company</h3>
                <li>
                    <a href="">About</a>
                </li>
                <li>
                    <a href="">Contact</a>
                    </li>
                <li>   
                    <a href="">Careers</a>
                    </li>
            </ul>
        </div>
        <div className='footer-bottom'>
        <p>© 2022 JediDrone transport. All rights reserved.</p>
        <ul>
            <li><a href=""><FaTwitter/></a></li>
            <li><a href=""><FaInstagram/></a></li>
            <li><a href=""><FaLinkedin/></a></li>
        </ul>
        </div>
    </footer>
  )
}

export default Footer