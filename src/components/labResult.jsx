import { LucideDownload } from "lucide-react";
import React, { useContext } from "react";
import { PatientData } from "../Context";

export default function LabResult() {
    const { jessicaInfo } = useContext(PatientData);

    return(
        <section className="bg-[#FFFFFF] pt-3 absolute right-[10px] bottom-[-333px] w-[290px] rounded-md">
            <div>
                <h1 className="text-black text-2xl px-3 font-medium">Lab Results</h1>
                <div className="mx-4 rounded-sm px-3 py-2 mb-2 flex items-center justify-between">
                    <h3 className="text-black">{jessicaInfo.bloodTest}</h3>
                    <LucideDownload className="text-black"/>
                </div>
                <div className="bg-[#F6F7F8] mx-4 rounded-sm px-3 py-2 mb-2 flex items-center justify-between">
                    <h3 className="text-black">{jessicaInfo.scans} </h3>
                    <LucideDownload className="text-black"/>
                </div>
                <div className=" mx-4 rounded-sm px-3 py-2 mb-2 flex items-center justify-between">
                    <h3 className="text-black">{jessicaInfo.radiology} </h3>
                    <LucideDownload className="text-black"/>
                </div>
                <div className=" mx-4 rounded-sm px-3 py-2 mb-2 flex items-center justify-between">
                    <h3 className="text-black">{jessicaInfo.xRays}</h3>
                    <LucideDownload className="text-black"/>
                </div>
                <div className="mx-4 rounded-sm px-3 py-2 mb-2 flex items-center justify-between">
                    <h3 className="text-black">Urine Test</h3>
                    <LucideDownload className="text-black"/>
                </div>
            </div>
        </section>
    )
}