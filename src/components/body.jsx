import React, { useContext } from "react";
import DiagnosticList from "./diagnosticList";
import Lungs from "../images/respiratory.svg";
import Temp from "../images/temperature.svg";
import Heart from "../images/HeartBPM.svg";
import Arrowdown from "../images/ArrowDown.svg";
import { PatientData } from "../Context";
import Graph from "./graph";

export default function Boddy() {
    const { jessicaInfo } = useContext(PatientData);

    return(
        <main>
            <section className="absolute top-[85px] left-[380px] rounded-md w-[650px] bg-[#FFFFFF]">
                <div className="px-4 border-opacity-50 py-3">
                    <h1 className="text-2xl text-black font-medium">
                        Diagnosis History
                    </h1>
                    <div className="w-full bg-[#F4F0FE] mt-6 rounded-md pt-2 px-3 h-[230px]">
                        <h2 className="text-xl text-black font-medium ">Blood Pressure</h2>
                        <div className="w-full">
                            <Graph />
                        </div>
                    </div>
                    <div className="flex gap-3 py-5">
                        <div className="bg-[#E0F3FA] px-2 py-3 rounded-md w-[228px]">
                            <img src={Lungs} alt="" />
                            <h3 className="text-gray-900">Respiratory Rate</h3>
                            <h2 className="font-medium text-gray-900 text-xl">{jessicaInfo.respiratoryValue} bmp</h2>
                            <h4 className="text-sm text-gray-900 mt-2">{jessicaInfo.respiratoryLevel}</h4>
                        </div>
                        <div className="bg-[#FFE6E9] px-2 py-3 rounded-md w-[228px]">
                            <img src={Temp} alt="" />
                            <h3 className="text-gray-900">Temperature</h3>
                            <h2 className="font-medium text-gray-900 text-xl">{jessicaInfo.temperatureValue} F</h2>
                            <h4 className="text-sm text-gray-900 mt-2">{jessicaInfo.temperatureLevel}</h4>
                        </div>
                        <div className="bg-[#FFE6F1] px-2 py-3 rounded-md w-[228px]">
                            <img src={Heart} alt="" />
                            <h3 className="text-gray-900">Heart Rate</h3>
                            <h2 className="font-medium text-gray-900 text-xl">{jessicaInfo.hRValue} bmp</h2>
                            <div className="flex space-x-2 items-center">
                                <img src={Arrowdown} alt="" />
                                <h4 className="text-sm text-gray-900 mt-2">{jessicaInfo.hRLevel}</h4>
                            </div>  
                        </div>
                    </div>
                </div>
            </section>
            <DiagnosticList />
        </main>
        
    )
}