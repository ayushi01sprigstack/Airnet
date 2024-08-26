import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

export default function AutoPilotChart() {
  const [chartState, setChartState] = useState({
    series: [
      {
        name: 'New Customers',
        data: [
          { x: 'Jan', y: [15, 20] },
          { x: 'Feb', y: [20, 25] },
          { x: 'Mar', y: [25, 40] },
          { x: 'Apr', y: [40, 45] },
          { x: 'May', y: [30, 35] },
          { x: 'Jun', y: [70, 75] },
          { x: 'Jul', y: [30,40] },
          { x: 'Aug', y: [75, 80] },
          { x: 'Sep', y: [60, 70] },
          { x: 'Oct', y: [20, 40] },
          { x: 'Nov', y: [45, 60] },
          { x: 'Dec', y: [60, 70] }
        ]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: 'rangeArea',
        toolbar: {
          show: false
      }
      },
      stroke: {
        curve: 'monotoneCubic'
      },
      title: {
        text: 'New Customers'
      },
      markers: {
        hover: {
          sizeOffset: 5
        }
      },
      dataLabels: {
        enabled: false
      },
      yaxis: {
        min: 10,
        max: 100,
        tickAmount: 10,
        labels: {
          formatter: (val) => `${val}%`
        }
      }
    }
  });

  return (
    <div id="chart">
      <ReactApexChart options={chartState.options} series={chartState.series} type="rangeArea" height={350} />
    </div>
  )
}
