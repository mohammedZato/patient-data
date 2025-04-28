import { LucideDownload } from "lucide-react";
import React from "react";

export default function LabResult() {
    return(
        <section className="bg-[#FFFFFF] pt-3 absolute right-[10px] bottom-[-333px] w-[290px] rounded-md">
            <div>
                <h1 className="text-black text-2xl px-3 font-medium">Lab Results</h1>
                <div className="mx-4 rounded-sm px-3 py-2 mb-2 flex items-center justify-between">
                    <h3 className="text-black">Blood Tests</h3>
                    <LucideDownload className="text-black"/>
                </div>
                <div className="bg-[#F6F7F8] mx-4 rounded-sm px-3 py-2 mb-2 flex items-center justify-between">
                    <h3 className="text-black">CT Scans</h3>
                    <LucideDownload className="text-black"/>
                </div>
                <div className=" mx-4 rounded-sm px-3 py-2 mb-2 flex items-center justify-between">
                    <h3 className="text-black">Radiology Reports</h3>
                    <LucideDownload className="text-black"/>
                </div>
                <div className=" mx-4 rounded-sm px-3 py-2 mb-2 flex items-center justify-between">
                    <h3 className="text-black">X-Rays</h3>
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