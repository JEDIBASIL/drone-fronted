import { Tabs, Button, Table } from "@mantine/core";
import { FaTruckLoading } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { MenuItem, Menu } from "@mantine/core";
import { InputWrapper,TextInput,Textarea } from '@mantine/core'
import { TiUserAdd } from "react-icons/ti";
const EditService = () => {
  return (
    <div className="table-container user">
    <Tabs>
        <Tabs.Tab label={'Services'}>
    <Table highlightOnHover striped>
        <thead>
            <tr>
                <th>id</th>
                <th>Question</th>
                <th>Answer</th>
                <th>more</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>2</td>
                <td>How does BeeDrone work</td>
                <td>
                    aljslj j jlkjsldjfolasjdf aj fjalj aljsdflj
                </td>
                <td>
                    <Menu
                        withArrow
                        control={
                            <button>
                                <FiMoreHorizontal />
                            </button>
                        }
                    >
                        <MenuItem>Hello</MenuItem>
                    </Menu>
                </td>
            </tr>
        </tbody>
    </Table>
    </Tabs.Tab>

    <Tabs.Tab label={'Edit heading'}>
    {/* <div className='sendMailContainer'> */}
            <h3>Edit services heading</h3>
            <InputWrapper className='formWrapper mail'>
                <TextInput label='Sub text' />
                <Textarea  label='Heading' />
                <div className='btn-container'><Button>Edit</Button></div>
            </InputWrapper>
            {/* </div> */}
    </Tabs.Tab>
    </Tabs>
</div>
  )
}

export default EditService