import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';

export default function Sales() {
    const [chartData, setChartData] = useState({
        series: [40,10],
        options: {
          chart: {
            type: 'donut',
          },
          labels: ['Sales', 'Remaining'],
          plotOptions: {
            pie: {
              startAngle: -90,
              endAngle: 90,
              offsetY: 10
            },
            
          },
          grid: {
            padding: {
              bottom: -80
            }
          },
          responsive: [{
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: 'bottom'
              }
            }
          }]
        }
      });
  return (
    <div className='pt-5 px-4' style={{background:'#8FF1DA',borderRadius:'16px'}}>
      <h3 className='fs-4 fw-semibold' style={{color:'#0C0815'}}>See that change is the</h3>
      <h3 className='fs-4 fw-semibold' style={{color:'grey'}}>Dynamic behind innovation.</h3>
      <div className='chartWrapper p-3 mt-4 salesWrapper'> 
      <div id="chart">
        <ReactApexChart options={chartData.options} series={chartData.series} type="donut" />
      </div>
      </div>
    </div>
  )
}
