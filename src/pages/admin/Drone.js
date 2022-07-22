import { Tabs,Button,Table } from '@mantine/core';
import {FaTruckLoading} from 'react-icons/fa'
import {FiMoreHorizontal} from 'react-icons/fi'
import { MenuItem,Menu } from '@mantine/core';
import {GiDeliveryDrone,GiBattery25,GiBoxUnpacking} from 'react-icons/gi'
import {ImDownload} from 'react-icons/im'
import droneImg from '../../img/drone.png'
import loadedDroneImg from  '../../img/loadedDrone.png'
import Information from '../../components/admin/Information';
import availableDrone from '../../img/availableDrone.png'
import robot from '../../img/lowBatteryLevelDrone.png'


const Drone = () => {
  return (
    <div className='table-container drone'>
            <Tabs>
      <Tabs.Tab label='All' icon={<GiDeliveryDrone/>}  tabKey="First">
      <Table highlightOnHover striped>
      <thead>
        <tr>
          <th>Drone id</th>
          <th>Model</th>
          <th>Weight</th>
          <th>Battery level</th>
          <th>State</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
      <tr>
      <td>DR03243423</td>
      <td>Heavyweight</td>
      <td>200gr</td>
      <td>67%</td>
      <td>IDLE</td>
      <td>
        <Menu withArrow control={<button><FiMoreHorizontal/></button>}>
            <MenuItem>Hello</MenuItem>
        </Menu>
      </td>
    </tr>
    <tr>
      <td>DR03243423</td>
      <td>Heavyweight</td>
      <td>200gr</td>
      <td>67%</td>
      <td>IDLE</td>
      <td>
        <Menu withArrow control={<button><FiMoreHorizontal/></button>}>
            <MenuItem>Hello</MenuItem>
        </Menu>
      </td>
    </tr>
      </tbody>
    </Table>

    <Information btnText='Register Drone' informationText={'When you register drones the will appear here'} informationHeader={'No drone'} infoPics={droneImg} directionPath='/admin/reg-drone'/>
      </Tabs.Tab>
      <Tabs.Tab color={'orange'}  label="Available" icon={<ImDownload/>} tabKey="Second">
        <Information infoPics={loadedDroneImg} informationText={'All your drone have been laoded and are on Duty'} informationHeader={'No drone available'}  btnText={''}/>
      </Tabs.Tab>
      <Tabs.Tab color={'teal'} label="Loaded" icon={<FaTruckLoading/>} tabKey="Third">
       <Information infoPics={availableDrone} informationText={'You have no drone on duty'} informationHeader={'No loaded drone'} btnText={''} />
      </Tabs.Tab>
      <Tabs.Tab color={'pink'} label="Low Battery" icon={<GiBattery25/>} tabKey="Fourth">
      <Information infoPics={robot} informationText={'The drones are in suitable '} informationHeader={'Good condition'} btnText={''} />

      </Tabs.Tab>
    </Tabs>
    </div>
  )
}

export default Drone