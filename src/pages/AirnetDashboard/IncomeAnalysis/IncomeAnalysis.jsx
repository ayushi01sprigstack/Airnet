import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import Sales from './Sales';
import IMAGES from '../../../utils/Images';

export default function IncomeAnalysis() {
    const [chartState, setChartState] = useState({
        series: [
            {
                name: 'Annual',
                data: [1000, 1500, 3600, 2400, 1800, 3400, 1120, 650, 1900, 600, 1850, 3000],
            },
        ],
        options: {
            chart: {
                type: 'bar',
                height: 350,
                toolbar: {
                    show: false
                }
            },
            plotOptions: {
                bar: {
                    horizontal: false,
                    columnWidth: '25%',
                    endingShape: 'rounded',
                },
            },
            dataLabels: {
                enabled: false,
            },
            stroke: {
                show: true,
                width: 2,
                colors: ['transparent'],
            },
            xaxis: {
                categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'Jul', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC'],

            },
            yaxis: {
                min: 0,
                max: 6000,
                labels: {
                    formatter: function (val) {
                        return val > 0 ? (val / 1000).toFixed(0) + 'k' : val;
                    }
                },
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val) {
                        return val + ' users';
                    },
                },
            },
        },
    });
    return (
        <div className="col-md-4">
            <div className='chartWrapper p-3'>
                <h5 className='chartHeader fs-5'>Income Analysis</h5>
                <div className="row d-flex align-items-center">
                    <div className="col-md-6">
                        <h3 className='fs-4 fw-bold mt-2 pb-2 pt-1'>$10,8900</h3>
                    </div>
                    <div className="col-md-6 text-end">
                        <span className='incomePercent me-1'><img src={IMAGES.greenArrow} alt="" />18.7%</span>
                        <span className=''>Vs this month</span>
                    </div>
                </div>
                <span className='activity'>Activity</span>
                <h6>Online Users</h6>
                <div id="chart">
                    <ReactApexChart
                        options={chartState.options}
                        series={chartState.series}
                        type="bar"
                        height={350}
                    />
                </div>
            </div>

            <div className='pt-4'>
                <Sales />
            </div>
        </div>
    )
}
