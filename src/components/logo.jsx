import React from "react";
import TechCare from "../images/TestLogo.svg";

export default function Logo() {
    return(
        <div className="flex items-center w-full lg:w-60">
            <div className="mr-auto">
                <img  src={TechCare} alt="Tech.Care Logo" />
            </div>
            <span className="text-4xl mt-[10px] text-black lg:hidden">
                <ion-icon cla name="menu-outline"></ion-icon>
            </span>
        </div> 
    )
}