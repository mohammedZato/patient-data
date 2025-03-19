import React from "react";
import Woman from "../images/senior.png";
import Gear from "../images/settings_.svg";
import Dots from "../images/more_.svg";

export default function Contact() {
    return(
        <div className=" items-center gap-5 hidden lg:flex">
            <img src={Woman} alt="" />
            <div className="flex flex-col">
                <span className="font-medium text-[14px]">Dr.Jose Simmons</span>
                <span className="">General Practitioner </span>
            </div>       
            <div className="flex gap-2">
                <img src={Gear} alt="Gear-icon" />
                <img src={Dots} alt="vertical-three-dots" />
            </div>
        </div>
    )
}