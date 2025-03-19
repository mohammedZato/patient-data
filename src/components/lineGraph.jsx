import React from "react";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    LineElement,
    CategoryScale, // x axis
    LinearScale, // y axis
    PointElement
} from "chart.js"
import { lineChartData, options } from "./data";

ChartJS.register(
    LineElement,
    CategoryScale, 
    LinearScale, 
    PointElement
)

export default function LineGraph() {
    return (
        <div style={{width: '750px', height: '195px'}}>
            <Line data = {lineChartData} options ={{
                ...options,
                responsive: true,
                maintainAspectRatio: true
                }}></Line>
        </div>
    )
}