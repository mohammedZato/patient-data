import React, { useContext } from "react";
import { PatientData } from "../Context";

export default function DiagnosticList() {
    const { jessicaInfo } = useContext(PatientData);

    return(
        <div className="bg-[#FFFFFF] rounded-md absolute bottom-[-310px] left-[380px] w-[650px] overflow-x-auto py-3">
            <h1 className="text-black text-2xl px-3 mb-3">Diagnostic List</h1>
            <table className="w-full text-left bg-[#FFFFFF]">
                <thead>
                    <tr className="border-b border-[#F6F7F8]">
                        <th className="py-3 px-4 font-semibold text-black">Problem/Diagnosis</th>
                        <th className="py-3 px-4 font-semibold text-black">Description</th>
                        <th className="py-3 px-4 font-semibold text-black">Status</th>
                    </tr>
                </thead>  
                <tbody>
                    <tr className="border-b border-[#F6F7F8]">
                        <td className="text-black px-4 py-1">{jessicaInfo.diagnostic_name}</td>
                        <td className="text-black px-4 py-1">{jessicaInfo.diagnostic_description}</td>
                        <td className="text-black px-4 py-1">{jessicaInfo.diagnostic_status}</td>
                    </tr>
                    <tr className="border-b border-[#F6F7F8]">
                        <td className="text-black px-4 py-1">{jessicaInfo.diabetes_name}</td>
                        <td className="text-black px-4 py-1">{jessicaInfo.diabetes_description}</td>
                        <td className="text-black px-4 py-1">{jessicaInfo.diabetes_status}</td>
                    </tr>
                    <tr className="border-b border-[#F6F7F8]">
                        <td className="text-black px-4 py-1">{jessicaInfo.asthma_name}</td>
                        <td className="text-black px-4 py-1">{jessicaInfo.asthma_description}</td>
                        <td className="text-black px-4 py-1">{jessicaInfo.asthma_status}</td>
                    </tr>
                </tbody>    
            </table>
        </div>
    );
}