import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import NewClients from './NewClients';

export default function TotalIncome() {
    const [chartState, setChartState] = useState({
        series: [
            {
                name: 'Products',
                data: [100000, 50000, 180000, 300000, 223000, 109000],
            },
            {
                name: 'Subscriptions',
                data: [50000, 150000, 100000, 100000, 200000, 50000],
            },
        ],
        options: {
            chart: {
                type: 'area',
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
                curve: 'smooth'
            },
            xaxis: {
                categories: ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'],

            },
            yaxis: {
                labels: {
                    formatter: function (value) {
                        if (value == 0) {
                            return '0';
                        }
                        if (value == 50000) {
                            return '50k';
                        }
                        if (value == 100000) {
                            return '100k';
                        }
                        if (value == 100000) {
                            return '100k';
                        }
                        if (value == 150000) {
                            return '150k';
                        }
                        if (value == 200000) {
                            return '200k';
                        }
                        if (value == 250000) {
                            return '250k';
                        }
                        if (value == 300000) {
                            return '300k';
                        }
                        return '';
                    }
                },
                min: 0,
                max: 300000,
            },
            fill: {
                opacity: 1,
            },
            tooltip: {
                y: {
                    formatter: function (val, { seriesIndex, dataPointIndex, w }) {
                        const seriesName = w.globals.seriesNames[seriesIndex];
                        return val + ' ' + seriesName.toLowerCase();
                    },
                },
            },
            legend: {
                position: 'top',
                offsetY: 0,
                height: 20,
            },
        },
    });
    const [donutChart, setDonutChart] = useState({
        series: [75, 5],
        options: {
            
            chart: {
                width: 380,
                type: 'donut',
            },
            labels: ['Salary', 'Investments'],
            dataLabels: {
                enabled: false
            },
            responsive: [{
                breakpoint: 480,
                options: {
                    chart: {
                        width: 200
                    },
                    legend: {
                        show: false
                    }
                }
            }],
            legend: {
                position: 'bottom',
                offsetY: 0,
                height: 50,
                formatter: function(seriesName, opts) {
                    return seriesName + ":  " + opts.w.globals.series[opts.seriesIndex]+'%'
                },
            },
            plotOptions: {
                pie: {
                    expandOnClick: false,
                    donut: {
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                showAlways: true,
                                label: 'Total',
                                fontSize: '22px',
                                fontFamily: 'Poppins, sans-serif',
                                fontWeight: 600,
                                color: '#615E83',
                                formatter: function (w) {
                                    const total = w.globals.seriesTotals.reduce((a, b) => a + b, 0);
                                    return total.toFixed(2) + '%';
                                  }
                            }
                        }
                    }
                }
            }
        }
    });
    return (
        <div className='col-md-4'>
            <div className='chartWrapper p-3'>
                <h5 className='chartHeader fs-5'>Your Activity</h5>
                <div className="">
                    <h3 className='fs-4 fw-bold mt-2 pb-2 pt-1'>Total income</h3>
                </div>
                <div id="chart">
                    <ReactApexChart
                        options={chartState.options}
                        series={chartState.series}
                        type="area"
                        height={350}
                    />
                </div>
                <span className='activity'>Statistics</span>
                <h6>Yearly income</h6>
                <hr />
                <div className='row'>
                    <div className="col-md-7 p-0 position-relative">
                        <ReactApexChart
                            options={donutChart.options}
                            series={donutChart.series}
                            type="donut"
                            width={350}
                        />
                    </div>
                    <div className="col-md-5 totalIncomeList">
                        <ul>
                            <li className='my-2 py-2' style={{color:'#27232F'}}>Approved</li>
                            <li className='my-2 py-2' style={{color:'#27232F'}}>Pending</li>
                            <li className='my-2 py-2' style={{color:'#27232F'}}>Under review</li>
                            <li className='my-2 py-2' style={{color:'#27232F'}}>Rejected</li>
                        </ul>
                    </div>

                </div>
            </div>
            <div className='mt-4'>
                <NewClients/>
            </div>
        </div>
    )
}
