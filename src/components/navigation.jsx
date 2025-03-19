import React from "react";
import { NavLink } from "react-router-dom";
import Home from "../images/home_.svg";
import Group from "../images/group_.svg";
import Calendar from "../images/calendar_.svg";
import Chat from "../images/chat_.svg";
import Credit from "../images/credit_.svg";

export default function Navbar() {
    return (
        <nav>
            <div>
                <ul className=" items-center gap-12 hidden lg:flex">
                    <li>
                        <NavLink className="text-black flex gap-2">
                            <img src={Home} alt="Overview" />
                            <h3 className="text-[14px]">Overview</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black flex gap-2 bg-[#01F0D0] px-4 py-3 rounded-full">
                            <img src={Group} alt="Patients" />
                            <h3 className="text-[14px]">Patients</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black flex gap-2">
                            <img src={Calendar} alt="Schedule" />
                            <h3 className="text-[14px]">Schedule</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black flex gap-2">
                            <img src={Chat} alt="Message" />
                            <h3 className="text-[14px]">Message</h3>
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="text-black flex gap-2">
                            <img src={Credit} alt="Transactions" />
                            <h3 className="text-[14px]">Transactions</h3>
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    )
}