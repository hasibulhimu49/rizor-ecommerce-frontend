import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

import DeliveryAddressForm from "./DeliveryAddressForm";
import OrderSummary from "./OrderSummary";

const steps = ["Login", "Delivery Address", "Order Summary", "Payment"];

export default function Checkout() {
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <div className="px-10 lg:px-30 rounded-md mx-10 my-5 border border-gray-100 shadow-lg">
      <Box sx={{ width: "100%", p: 3 }}>
        <Stepper activeStep={activeStep}>
          {steps.map((label) => (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          ))}
        </Stepper>

        {activeStep === steps.length ? (
          <Typography sx={{ mt: 3 }}>
            All steps completed - you're finished.
          </Typography>
        ) : (
          <>
            <div className="mt-8">
              {activeStep === 0 && (
                <div className="text-center text-xl font-semibold">
                  Login Step
                </div>
              )}

              {activeStep === 1 && <DeliveryAddressForm />}

              {activeStep === 2 && <OrderSummary />}

              {activeStep === 3 && (
                <div className="text-center text-xl font-semibold">
                  Payment Component
                </div>
              )}
            </div>

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                mt: 4,
              }}
            >
              <Button
                disabled={activeStep === 0}
                onClick={handleBack}
                variant="outlined"
              >
                Back
              </Button>

              <Button
                variant="contained"
                onClick={handleNext}
              >
                {activeStep === steps.length - 1 ? "Finish" : "Next"}
              </Button>
            </Box>
          </>
        )}
      </Box>
    </div>
  );
}