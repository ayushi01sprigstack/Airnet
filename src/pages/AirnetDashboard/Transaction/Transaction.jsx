import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
import HappyCustomer from './HappyCustomer';
import IMAGES from '../../../utils/Images';

export default function Transaction() {
    const [donutChart, setDonutChart] = useState({
        series: [10,30,30,30],
        options: {
            chart: {
                width: 380,
                type: 'donut',
            },
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
              show:false
            },
            colors:['#1486FF','#BFDEFF','#0C0815','#05DFAD'],
            plotOptions: {
                pie: {
                    expandOnClick: true
                }
            }
        }
    });
    return (
        <div className='col-md-4 py-5 mt-5'>
            <div className='chartWrapper p-3 position-relative'>
                <div className="row align-items-center">
                    <div className="col-md-6">
                        <h6 className='fs-6 fw-bold'>Transactions</h6>
                    </div>
                    <div className="col-md-6 transactionTabs">
                        <ul className="nav nav-tabs">
                            <li className="nav-item px-3">
                                <a className="nav-link" aria-current="page" href="#">Newest</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Oldest</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <table className="table table-responsive mt-2">
                        <thead>
                            <tr>
                                <th scope="col">Name</th>
                                <th scope="col">Status</th>
                                <th scope="col">Date</th>
                                <th scope="col">Amount</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td scope="col"><img src={IMAGES.profile1} alt="profile-1" className='me-1' />Guy Hawkins</td>
                                <td scope="col">In progress</td>
                                <td scope="col">14 July 2023</td>
                                <td scope="col">$100</td>
                            </tr>
                            <tr>
                                <td scope="col"><img src={IMAGES.profile3} alt="profile-3" className='me-1' />Jane Cooper</td>
                                <td scope="col">Complete</td>
                                <td scope="col">14 July 2023</td>
                                <td scope="col">$600</td>
                            </tr>
                            <tr>
                                <td scope="col"><img src={IMAGES.profile2} alt="profile-2" className='me-1' />Ralph Edwards</td>
                                <td scope="col">In progress</td>
                                <td scope="col">14 July 2023</td>
                                <td scope="col">$690</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className='chartWrapper p-3 moneyActivity'>
                    <span style={{ fontSize: '12px' }}> Money activity</span>
                    <div id="chart">
                    <ReactApexChart
                        options={donutChart.options}
                        series={donutChart.series}
                        type="donut"
                        width={200}
                    />
                </div>
                </div>
            </div>
           <div className='py-4'>
           <h2 className='text-black fs-2 p-2'>Dependable and <br /> <img src={IMAGES.circle} alt="circle" className='me-2 py-3'/>Reputable</h2>
           </div>
           <div>
           <HappyCustomer/>
           </div>
        </div>
    )
}
