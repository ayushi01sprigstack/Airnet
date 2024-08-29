import React, { useState } from 'react'
import ManagementTools from './ManagementTools'
import AutoPilotChart from './AutoPilotChart'
import Popup from '../../../components/Popup'

export default function ManagementMain() {
  const[showAutoPilot, setShowAutoPilot] = useState(false);
  const[showOptimization, setShowOptimization] = useState(false);
  const[showCommitment, setShowCommitment] = useState(false);
  return (
    <>
      <div className='pt-5 text-center contentBackground'>
        <h2 className='fs-2 text-black'>Essential cash management tools <br />specifically designed for startups.</h2>
      </div>
      <div className='row contentBackground p-5'>
        <div className="col-md-4">
          <ManagementTools 
            backgroundColor='#D9EBFF' 
            toolName='Autopilot'
            chart={<AutoPilotChart/>} 
            description='Empower our AI engine to manage the purchase and sale of reserved instances, effectively optimizing your AWS expenditure.' 
            openPopup={()=>setShowAutoPilot(true)}
          />
        </div>
        <div className="col-md-4">
          <ManagementTools 
            backgroundColor='#DAFAF3' 
            toolName='Continuous Optimization' 
            chart={<AutoPilotChart/>}
            description='Our AI engine consistently observes and adapts to your usage behaviors, uncovering fresh savings possibilities.' 
            openPopup={()=>setShowOptimization(true)}
          />
        </div>
        <div className="col-md-4">
          <ManagementTools 
            backgroundColor='#F5F5F6' 
            toolName='Commitment-free' 
            chart={<AutoPilotChart/>}
            description='Embrace the advantages of extended AWS pricing without entanglements.' 
            openPopup={()=>setShowCommitment(true)}
          />
        </div>
      </div>
      <Popup show={showAutoPilot} handleClose={()=>setShowAutoPilot(false)} size="md" modalHeader="Autopilot" modalBody="Empower our AI engine to manage the purchase and sale of reserved instances, effectively optimizing your AWS expenditure."/>
      <Popup show={showOptimization} handleClose={()=>setShowOptimization(false)} size="lg" modalHeader="Continuous Optimization" modalBody="Our AI engine consistently observes and adapts to your usage behaviors, uncovering fresh savings possibilities."/>
      <Popup show={showCommitment} handleClose={()=>setShowCommitment(false)} size="sm" modalHeader="Commitment-free" modalBody="Embrace the advantages of extended AWS pricing without entanglements."/>
    </>
  )
}
