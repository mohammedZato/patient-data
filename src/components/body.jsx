import React, { useContext } from "react";
import Lungs from "../images/respiratory.svg";
import Temp from "../images/temperature.svg";
import Heart from "../images/HeartBPM.svg";
import { PatientData } from "../Context";
import Graph from "./graph";

export default function Boddy() {
    const { jessicaInfo } = useContext(PatientData);

    return(
        <main>
            <section className="absolute top-[92px] left-[380px] rounded-md w-[650px] bg-[#FFFFFF]">
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
                            <h4 className="text-sm text-gray-900 mt-2">{jessicaInfo.hRLevel}</h4>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg-[#FFFFFF] absolute top-[580px] left-[380px] w-[650px] h-[349px]">
                <div className=" border-opacity-50 mt-5 px-4 py-2">
                    <h1 className="font-medium mb-6 text-black text-2xl">Diagnostic List</h1>
                    <div className="grid grid-cols-3 gap-5">
                        <div className="">
                            <h3 className="font-bold text-black mb-3">Problem/Diagnosis</h3>
                            <h3 className="text-sm text-black">{jessicaInfo.diagnostic_name}</h3>
                            <h3 className="text-sm text-black">{jessicaInfo.diabetes_name}</h3>
                        </div>
                        <div>
                            <h3 className="font-bold text-black mb-3">Description</h3>
                            <h3 className="text-sm text-black">{jessicaInfo.diagnostic_description}</h3>
                            <h3 className="text-sm text-black">{jessicaInfo.diabetes_description}</h3>
                        </div>
                        <div>
                            <h3 className="font-bold text-black mb-3">Status</h3>
                            <h3 className="text-sm text-black">{jessicaInfo.diagnostic_status}</h3>
                            <h3 className="text-sm text-black">{jessicaInfo.diabetes_status}</h3>
                        </div>
                    </div>
                </div>
            </section>    
        </main>
    )
}