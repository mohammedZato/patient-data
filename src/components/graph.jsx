import React, { useContext } from "react";
import LineGraph from "./lineGraph";
import { PatientData } from "../Context";

export default function Graph() {
    const { jessicaInfo } = useContext(PatientData);

    return (
        <section className="w-[600px] h-[190px]">
            <div className=" flex gap-3">
                <div>
                    <div className="">
                        <h3 className="text-sm float-right text-gray-900 absolute top-20 right-[260px]">Last 6 months</h3>
                    </div>
                    <div>
                        <LineGraph />
                    </div>
                </div>
                <div className="z-40 absolute top-20 right-20">
                    <div className="mb-4 border-b-2 pb-4">
                        <div className="flex items-center">
                            <div className="border size-3 mr-1 rounded-full bg-[#E66FD2]">
                                
                            </div>
                            <h3 className="font-medium text-gray-900 text-sm">Systolic</h3>
                        </div>
                        <span className="font-bold text-gray-900">{jessicaInfo.systolicValue}</span>
                        <h3 className="text-sm text-gray-900">{jessicaInfo.systolicLevels}</h3>
                    </div>
                    <div>
                        <div className="flex items-center">
                            <div className="border size-3 mr-1 rounded-full bg-[#8C6FE6]">
                                
                            </div>
                            <h3 className="font-medium text-gray-900 text-sm">Diastolic</h3>
                        </div>
                        <span className="font-bold text-gray-900">{jessicaInfo.diastolicValue}</span>
                        <h3 className="text-sm text-gray-900">{jessicaInfo.diastolicLevels}</h3>
                    </div>
                </div>
            </div>     
        </section>
    )
}