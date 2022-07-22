import { Table } from '@mantine/core';
import {FiMoreHorizontal} from 'react-icons/fi'
import { MenuItem,Menu } from '@mantine/core';
const RecentUser = () => {
  return (
    <div className="recent-user">
        <h2>Recent users</h2>
                <Table highlightOnHover striped>
      <thead>
        <tr>
          <th>Username</th>
          <th>Email address</th>
          <th>Phone number</th>
          <th>More</th>
        </tr>
      </thead>
      <tbody>
      <tr>
      <td>James</td>
      <td>Jame@gmail.com</td>
      <td>07020324567</td>
      <td>
        <Menu withArrow control={<button><FiMoreHorizontal/></button>}>
            <MenuItem>Hello</MenuItem>
        </Menu>
      </td>
    </tr>
    <tr>
      <td>James</td>
      <td>Jame@gmail.com</td>
      <td>07020324567</td>
      <td>
        <Menu withArrow control={<button><FiMoreHorizontal/></button>}>
            <MenuItem>Hello</MenuItem>
        </Menu>
      </td>
    </tr>
      </tbody>
    </Table>
    </div>
  )
}

export default RecentUser