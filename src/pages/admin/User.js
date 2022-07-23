import { Tabs, Button, Table } from "@mantine/core";
import { FaTruckLoading } from "react-icons/fa";
import { FiMoreHorizontal } from "react-icons/fi";
import { MenuItem, Menu } from "@mantine/core";
import { GiDeliveryDrone, GiBattery25, GiBoxUnpacking } from "react-icons/gi";
import { TiUserAdd } from "react-icons/ti";

const User = () => {
    return (
        <div className="table-container user">
            <Tabs>
                <Tabs.Tab label="All" icon={<GiDeliveryDrone />} tabKey="First">
                    <Table highlightOnHover striped>
                        <thead>
                            <tr>
                                <th>Username</th>
                                <th>Email address</th>
                                <th>Phone number</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>James</td>
                                <td>Jame@gmail.com</td>
                                <td>07020324567</td>
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
                            <tr>
                                <td>James</td>
                                <td>Jame@gmail.com</td>
                                <td>07020324567</td>
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
                <Tabs.Tab
                    color={"orange"}
                    label="Recent"
                    icon={<TiUserAdd />}
                    tabKey="Second"
                ></Tabs.Tab>
            </Tabs>
        </div>
    );
};

export default User;
