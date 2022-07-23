import { Tabs, Button, Table } from "@mantine/core";
import { FaTruckLoading } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { MenuItem, Menu } from "@mantine/core";
import { GiDeliveryDrone, GiBattery25, GiBoxUnpacking } from "react-icons/gi";
import { TiUserAdd } from "react-icons/ti";
const EditFaqs = () => {
    return (
        <div className="table-container user">
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
        </div>
    );
};

export default EditFaqs;
