/* eslint-disable react/prop-types */
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"


function LineChart ({chart}) {

    const chartArr = {
        labels: chart?.map((item) => item.time),
        datasets: [{
            label: "Объём производства",
            data: chart?.map((item) => item.process_acc),
            backgroundColor: ['green']
        },
        ]
    }

    return (
        <Line data={chartArr} />
    )
}

export default LineChart;
