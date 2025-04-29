import { Legend, plugins, scales } from "chart.js";

export const lineChartData = {
    labels: [
        "Oct 2023",
        "Nov 2023",
        "Dec 2023",
        "Jan 2024",
        "Feb 2024",
        "Mar 2024"
    ],
    datasets: [
        {
            label: "Blood Pressure",
            data: [120, 110, 150, 108, 143, 149],
            borderColor: "#C26EB4",
            backgroundColor: "#E66FD2",
            pointBorderColor: "#E66FD2",
            tension: 0.4
        },
        {
            data: [105, 65, 105, 90, 73, 76],
            borderColor: "#7E6CAB",
            backgroundColor: "##8C6FE6",
            pointBorderColor: "#8C6FE6",
            tension: 0.4
        },
    ],
};

export const options = {
    plugins: {
        legend: true
    },
    scales: {
        y: {
            min: 60,
            max: 180
        }
    }
}