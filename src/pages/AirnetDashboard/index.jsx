import React from 'react'
import ProductTeams from './ProductTeams/ProductTeams'
import ManagementMain from './Management-Tools'
import EfficientAnalytics from './EfficientAnalytics/EfficientAnalytics'
import IncomeAnalysis from './IncomeAnalysis/IncomeAnalysis'
import TotalIncome from './TotalIncome/TotalIncome'
import Transaction from './Transaction/Transaction'
import '../../styles/airnetdashboard.css'

export default function AirnetDashboard() {
  return (
    <>
    <div className='contentBackground'>
      <EfficientAnalytics/>
      <div className='row px-5 py-3'>
        <IncomeAnalysis/>
        <TotalIncome/>
        <Transaction/>
      </div>
    </div>
     <ProductTeams/>
    <ManagementMain /> 
    </>
  )
}
