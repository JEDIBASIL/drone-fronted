import { useLocation } from "react-router-dom";
import { Autocomplete } from "@mantine/core";
import { CgSearch } from "react-icons/cg";
import { AiTwotoneBell } from "react-icons/ai";
import adminImg from "./call-of-duty-modern-warfare.jpg";
import { useEffect, useState } from "react";
import { MdZoomOutMap } from "react-icons/md";
import { FiMinimize } from "react-icons/fi";
const TopBar = ({ switchState, state, switchDisplay }) => {
    const location = useLocation();
    const [header, setHeader] = useState();
    const HeaderName = () => {
        if (location.pathname === "/admin") return "Dashboard";
        if (
            location.pathname === "/admin/drone" ||
            location.pathname === "/admin/reg-drone"
        )
            return "Drone";
        if (
            location.pathname === "/admin/users" ||
            location.pathname === "/admin/send-users-mail" ||
            location.pathname === "/admin/send-users-notification"
        )
            return "Users";
    };

    useEffect(() => {
        setHeader(HeaderName);
        console.log(location.pathname);
    });

    const handleEvent = () => {
        switchState({ type: "key1" });
        switchState({ type: "key2" });
    };

    const normal = () => {
        switchState({ type: "switchBoth" });
    };

    return (
        <div
            onClick={(e) => {
                e.target.classList[0] !== "switchIcon"?  switchState({ type: "normalSlide" }):switchState({ type: "showSlide" })
                   

            }}
            className="top-bar"
        >
            <h1>{header}</h1>
            <div className="search-bar">
                <Autocomplete
                    radius={10}
                    icon={<CgSearch />}
                    placeholder="Search..."
                    data={["React", "Angular", "Svelte", "Vue"]}
                />
            </div>
            <div className="admin-details">
                <i className='switchIcon'>
                    {state.key1 === false && state.key2 === false ? (
                        <MdZoomOutMap
                            className="switchIcon"
                            onMouseEnter={switchDisplay}
                            onClick={handleEvent}
                        />
                    ) : (
                        <FiMinimize
                            className="switchIcon"
                            onMouseEnter={switchDisplay}
                            onClick={normal}
                        />
                    )}
                </i>
                <i>
                    {" "}
                    <AiTwotoneBell />
                </i>

                <img src={adminImg} alt="" />
            </div>
        </div>
    );
};

export default TopBar;
