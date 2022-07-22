import {GiDeliveryDrone,GiBattery25} from 'react-icons/gi'
import {SiSnapcraft} from 'react-icons/si'
import { DatePicker } from '@mantine/dates';
 
const OverviewCards = () => {
  return (
    <div className='Overview'>
        <div className='overview-date'>
        <DatePicker placeholder="Today"required />
        </div>
           
    <div className='OverviewCard'>
        <div className='card'>
            <div className="top">
                <i><GiDeliveryDrone/></i>
                <span>Total Drone</span>
            </div>
            <h1>100K</h1>
        </div>
        <div className='card'>
            <div className="top">
                <i><SiSnapcraft/></i>
                <span>Available Drone</span>
            </div>
            <h1>94K</h1>
        </div>
        <div className='card'>
            <div className="top">
                <i><GiBattery25/></i>
                <span>Low battery capacity</span>
            </div>
            <h1>400</h1>
        </div>
        <div className='card'>
            <div className="top">
                <i><GiDeliveryDrone/></i>
                <span>Total Drone</span>
            </div>
            <h1>100K</h1>
        </div>
        <div className='card'>
            <div className="top">
                <i><SiSnapcraft/></i>
                <span>Available Drone</span>
            </div>
            <h1>94K</h1>
        </div>
        <div className='card'>
            <div className="top">
                <i><GiBattery25/></i>
                <span>Low battery capacity</span>
            </div>
            <h1>400</h1>
        </div>
    </div>
    </div>
  )
}

export default OverviewCards