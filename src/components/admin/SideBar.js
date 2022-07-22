import { Link as A, useLocation } from "react-router-dom";
import { Accordion, ThemeIcon } from "@mantine/core";
import {
    FaCog,
    FaBell,
    FaUserAstronaut,
    FaUsers,
    FaMailBulk,
} from "react-icons/fa";
import { BsFillGrid1X2Fill } from "react-icons/bs";
import { GiDeliveryDrone, GiJetpack } from "react-icons/gi";
import { MdNotificationsActive } from "react-icons/md";
import { TbCapture, TbChevronRight } from "react-icons/tb";
import { HiShieldCheck } from "react-icons/hi";
import { VscPreview } from "react-icons/vsc";
import { useEffect, useState } from "react";
const SideBar = ({ barDisplay, changeDisplay, state }) => {
    const location = useLocation();
    return (
        <div
            className={barDisplay === false ? "sidebar" : "sidebar minimizeBar"}
            style={
                barDisplay && state.slide === true
                    ? { transform: "translateX(-110%)" }
                    : { transform: "translateX(0)" }
            }
        >
            <div className="sidebar-menu">
                <A
                    onClick={() => {
                        changeDisplay({ type: "normalSlide" });
                    }}
                    className={
                        location.pathname === "/admin"
                            ? "sidebar-a active"
                            : "sidebar-a"
                    }
                    to={"/admin"}
                >
                    {" "}
                    <ThemeIcon color="blue" variant="light">
                        <BsFillGrid1X2Fill />
                    </ThemeIcon>{" "}
                    Dashboard
                </A>
                {console.log(location.pathname)}
                <Accordion
                    icon={<TbChevronRight />}
                    className="sidebar-item"
                    iconPosition="right"
                    multiple
                    transitionDuration="100"
                >
                    <Accordion.Item
                        className="sidebar-item"
                        label={
                            <span>
                                {" "}
                                <ThemeIcon color="teal" variant="light">
                                    <GiDeliveryDrone />
                                </ThemeIcon>{" "}
                                Drone
                            </span>
                        }
                    >
                        <div className="item-wrapper">
                            {" "}
                            <A
                                onClick={() => {
                                    changeDisplay({ type: "normalSlide" });
                                }}
                                to={"/admin/drone"}
                            >
                                {" "}
                                <ThemeIcon color="violet" variant="light">
                                    <GiJetpack />
                                </ThemeIcon>
                                All drone
                            </A>
                        </div>
                        <div className="item-wrapper">
                            {" "}
                            <A
                                onClick={() => {
                                    changeDisplay({ type: "normalSlide" });
                                }}
                                to={"/admin/reg-drone"}
                            >
                                {" "}
                                <ThemeIcon color="yellow" variant="light">
                                    <TbCapture />
                                </ThemeIcon>
                                Register drone
                            </A>
                        </div>
                    </Accordion.Item>
                </Accordion>
                <Accordion
                    icon={<TbChevronRight />}
                    className="sidebar-item"
                    iconPosition="right"
                    multiple
                    transitionDuration="100"
                >
                    <Accordion.Item
                        className="sidebar-item"
                        label={
                            <span>
                                {" "}
                                <ThemeIcon color="gray" variant="light">
                                    <FaUserAstronaut />
                                </ThemeIcon>{" "}
                                Users
                            </span>
                        }
                    >
                        <div className="item-wrapper">
                            {" "}
                            <A
                                onClick={() => {
                                    changeDisplay({ type: "normalSlide" });
                                }}
                                to={"/admin/users"}
                            >
                                {" "}
                                <ThemeIcon color="yellow" variant="light">
                                    <FaUsers />
                                </ThemeIcon>
                                All users
                            </A>
                        </div>
                        <div className="item-wrapper">
                            {" "}
                            <A
                                onClick={() => {
                                    changeDisplay({ type: "normalSlide" });
                                }}
                                to={"/admin/send-users-notification"}
                            >
                                {" "}
                                <ThemeIcon color="pink" variant="light">
                                    <MdNotificationsActive />
                                </ThemeIcon>
                                Notify users
                            </A>
                        </div>
                        <div className="item-wrapper">
                            {" "}
                            <A
                                onClick={() => {
                                    changeDisplay({ type: "normalSlide" });
                                }}
                                to={"/admin/reg-drone"}
                            >
                                {" "}
                                <ThemeIcon color="blue" variant="light">
                                    <HiShieldCheck />
                                </ThemeIcon>
                                User validation
                            </A>
                        </div>
                    </Accordion.Item>
                </Accordion>

                <A
                    onClick={() => {
                        changeDisplay({ type: "normalSlide" });
                    }}
                    className="sidebar-a"
                    to={"/"}
                >
                    {" "}
                    <ThemeIcon color="orange" variant="light">
                        <FaBell />
                    </ThemeIcon>{" "}
                    Notification
                </A>

                <Accordion
                    icon={<TbChevronRight />}
                    className="sidebar-item"
                    iconPosition="right"
                    multiple
                    transitionDuration="100"
                >
                    <Accordion.Item
                        className="sidebar-item"
                        label={
                            <span>
                                {" "}
                                <ThemeIcon color="red" variant="light">
                                    <FaCog />
                                </ThemeIcon>{" "}
                                Settings
                            </span>
                        }
                    ></Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
};

export default SideBar;
