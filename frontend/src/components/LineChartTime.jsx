/* eslint-disable react/prop-types */
import {Line} from "react-chartjs-2";
import {Chart as ChartJS} from "chart.js/auto"


function LineChartTime ({chart}) {

    const chartArr = {
        labels: chart?.map((item) => item.time),
        datasets: [{
            label: "средняя скорость обработки с последнего события START до текущего события",
            data: chart?.map((item) => item.process_speed),
            backgroundColor: ['red']
        },
        ]
    }

    return (
        <Line data={chartArr} />
    )
}

export default LineChartTime;