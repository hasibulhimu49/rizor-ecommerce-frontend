import Step from '@mui/material/Step'
import StepLabel from '@mui/material/StepLabel'
import Stepper from '@mui/material/Stepper'
import React from 'react'


const steps=["Placed","Order Confirmed","Shipped","Out For Delivery","Delivered"]


const OrderTracker = ({activeStep}) => {
  return (
    <div className='m-20'>
        <Stepper activeStep={activeStep}>
            {
                steps.map((l)=><Step>
                    <StepLabel sx={{color:"#9155FD", fontSize:"44px"}}>{l}</StepLabel>
                </Step>)
            }
        </Stepper  >
    </div>
  )
}

export default OrderTracker