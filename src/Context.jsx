import { createContext, useEffect, useState } from "react";

export const PatientData = createContext();

export default function GlobalState({ children }){
    const [jessicaInfo, setJessicaInfo] = useState('');

    async function fetchPatientData() {
        try {
            const response = await fetch("https://fedskillstest.coalitiontechnologies.workers.dev", {
                method: "GET",
                headers: {
                    "Authorization": `Basic ${
                        btoa(`${"coalition"}:${"skills-test"}`)
                    }`,
                    "Content-Type": "application/json"
                }
            });
    
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
                
            }
            const result = await response.json();
            const data = (result[3]);
            console.log(data)
            // console.log(data.diagnosis_history[0].blood_pressure.diastolic)
            setJessicaInfo({
                "age": data.age,
                "dateOfBirth": data.date_of_birth,
                "emergencyContact": data.emergency_contact,
                "gender": data.gender,
                "insuranceType": data.insurance_type,
                "name": data.name,
                "phoneNumber": data.phone_number,
                "profilePicture": data.profile_picture,
                "respiratoryLevel": data.diagnosis_history[0].respiratory_rate.levels,
                "respiratoryValue": data.diagnosis_history[0].respiratory_rate.value,
                "temperatureLevel": data.diagnosis_history[0].temperature.levels,
                "temperatureValue": data.diagnosis_history[0].temperature.value,
                "hRLevel": data.diagnosis_history[0].heart_rate.levels,
                "hRValue": data.diagnosis_history[0].heart_rate.value,
                "diagnostic_name": data.diagnostic_list[0].name,
                "diagnostic_description": data.diagnostic_list[0].description,
                "diagnostic_status": data.diagnostic_list[0].status,
                "diabetes_name": data.diagnostic_list[1].name,
                "diabetes_description": data.diagnostic_list[1].description,
                "diabetes_status": data.diagnostic_list[1].status,
                "asthma_name": data.diagnostic_list[2].name,
                "asthma_description": data.diagnostic_list[2].description,
                "asthma_status": data.diagnostic_list[2].status,
                "systolicValue": data.diagnosis_history[0].blood_pressure.systolic.value,
                "diastolicValue": data.diagnosis_history[0].blood_pressure.diastolic.value,
                "systolicLevels": data.diagnosis_history[0].blood_pressure.systolic.levels,
                "diastolicLevels": data.diagnosis_history[0].blood_pressure.diastolic.levels,
                "bloodTest": data.lab_results[0],
                "scans": data.lab_results[1],
                "radiology": data.lab_results[2],
                "xRays": data.lab_results[3],
            })
        } catch (error) {
            console.log(error)
        }     
    };
    useEffect(() => {
        fetchPatientData()
    }, []);

    return <PatientData.Provider value={{ jessicaInfo, setJessicaInfo }}>{children}</PatientData.Provider>
}