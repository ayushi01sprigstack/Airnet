import React from 'react'
import ManagementTools from './ManagementTools'
import AutoPilotChart from './AutoPilotChart'

export default function ManagementMain() {
  return (
    <>
      <div className='mt-3 pt-5 text-center'>
        <h2 className='fs-2 text-black'>Essential cash management tools <br />specifically designed for startups.</h2>
      </div>
      <div className='row p-5'>
        <div className="col-md-4">
          <ManagementTools 
            backgroundColor='#D9EBFF' 
            toolName='Autopilot' 
            description='Empower our AI engine to manage the purchase and sale of reserved instances, effectively optimizing your AWS expenditure.' 
          />
        </div>
        <div className="col-md-4">
          <ManagementTools 
            backgroundColor='#DAFAF3' 
            toolName='Continuous Optimization' 
            description='Our AI engine consistently observes and adapts to your usage behaviors, uncovering fresh savings possibilities.' 
          />
        </div>
        <div className="col-md-4">
          <ManagementTools 
            backgroundColor='#F5F5F6' 
            chart={<AutoPilotChart/>}
            toolName='Commitment-free' 
            description='Embrace the advantages of extended AWS pricing without entanglements.' 
          />
        </div>
      </div>
    </>
  )
}
