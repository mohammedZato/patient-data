import React, { useContext } from "react";
import Calendar from "../images/calendar_.svg";
import female from "../images/FemaleIcon.svg";
import Phone from "../images/PhoneIcon.svg";
import Insurance from "../images/InsuranceIcon.svg";
import { PatientData } from "../Context";

export default function RightSidebar() {
    const { jessicaInfo } = useContext(PatientData);
    
    return(
        <aside className="w-[290px] h-screen absolute top-[91px] right-[10px] bg-[#FFFFFF] border-opacity-50 rounded-md hidden lg:flex">
            <div className="py-4">
                <div className="flex flex-col items-center justify-center mb-6">
                    <img className="" src={jessicaInfo.profilePicture} alt="" />
                    <h3 className="font-medium">{jessicaInfo.name}</h3>
                </div>
                <div className="px-3">
                    <div className="mb-5 flex  items-center gap-3">
                        <img src={Calendar} alt="" />
                        <div>
                            <h3>Date of Birth</h3>
                            <h3 className="font-medium">{jessicaInfo.dateOfBirth}</h3>
                        </div>
                    </div>
                    <div className="mb-5 flex items-center  gap-3 mx-[-4px]">
                        <img className="size-6" src={female} alt="" />
                        <div>
                            <h3>Gender</h3>
                            <h3 className="font-medium">{jessicaInfo.gender}</h3>
                        </div>
                    </div>
                    <div className="mb-5 flex items-center  gap-3 mx-[-4px]">
                        <img className="size-6" src={Phone} alt="" />
                        <div>
                            <h3>Contact Info</h3>
                            <h3 className="font-medium">{jessicaInfo.phoneNumber}</h3>
                        </div>
                    </div>
                    <div className="mb-5 flex items-center  gap-3 mx-[-4px]">
                        <img className="size-6" src={Phone} alt="" />
                        <div>
                            <h3>Emergency contact</h3>
                            <h3 className="font-medium">{jessicaInfo.emergencyContact}</h3>
                        </div>
                    </div>
                    <div className="mb-5 flex items-center  gap-3 mx-[-4px]">
                        <img className="size-6" src={Insurance} alt="" />
                        <div>
                            <h3>Insurance Provider</h3>
                            <h3 className="font-medium">{jessicaInfo.insuranceType}</h3>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center">
                    <button className="bg-[#01F0D0] rounded-full px-8 py-3">
                        Show All Information
                    </button>
                </div>
            </div>
        </aside>
    )
}