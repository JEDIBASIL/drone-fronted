import '../../styles/style.css'
import { useState } from 'react';
import Menu from "./Menu";
import { Outlet } from "react-router-dom";
import HomeBar from "./HomeBar";

const DroneApp = () => {
    const [menu,setMenu] = useState(false);
    return (
        <div className="droneApp">
            <Menu menu={menu} setMenu={setMenu} />
            <HomeBar menu={menu} setMenu={setMenu} />
            <Outlet />
        </div>
    );
};

export default DroneApp;
