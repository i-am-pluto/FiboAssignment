import { Bar } from "react-chartjs-2";
import {
  Chart,
  CategoryScale,
  BarElement,
  LinearScale,
  BarController,
} from "chart.js";

Chart.register(CategoryScale, BarElement, LinearScale, BarController);

const BarChart = () => {

    const data = {
        labels: ["28/4", "30/4", "2/5", "5/5", "11/5", "15/5", "22/5"],
        datasets: [
          {
            label: "Percentage",
            data: [92, 100, 98, 90, 84, 82, 80],
            backgroundColor: "rgb(90,146,203)",
            barThickness: 15,
          },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: "top" as const, // Ensuring the value is one of the specified allowed types
          },
          title: {
            display: true,
            text: "Performance Chart",
          },
        },
        scales: {
          x: {
            grid: {
              display: false, // This will hide the grid lines for the x-axis
            },
          },
          y: {
            grid: {
              display: false, // This will hide the grid lines for the y-axis
            },
          },
        },
      };

    return (
        <Bar data={data} options={options} />
    )
}

export default BarChart;