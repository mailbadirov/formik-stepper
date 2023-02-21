import { useState } from "react";
import { useFormik } from "formik";

import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Paper from "@mui/material/Paper";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import Alert from "@mui/material/Alert";
import { LinearProgress } from "@mui/material";
import AlertTitle from "@mui/material/AlertTitle";

import CampaignSettings from "./CampaignSettings";
import AdGroup from "./AdGroup";
import Ad from "./Ad";

import { initialValues, validationSchema } from "@/utils/formik-values";

import { IFormProps } from "@/utils/types";

const steps = 3;

function getStepContent(step: number, formProps: IFormProps) {
  switch (step) {
    case 0:
      return <CampaignSettings {...formProps} />;
    case 1:
      return <AdGroup {...formProps} />;
    case 2:
      return <Ad {...formProps} />;
    default:
      throw new Error("Unknown step");
  }
}

const Checkout = () => {
  const [activeStep, setActiveStep] = useState(0);

  const [isAlertOpen, setIsAlertOpen] = useState(false);

  const [alertMessage, setAlertMessage] = useState("Submitting...");

  const handleNext = () => {
    if (activeStep === steps - 1) {
      setIsAlertOpen(true);

      setTimeout(() => {
        setAlertMessage(
          "This stepper created with React, Typescript, Formik, Yup and Material UI. Good Luck!"
        );
      }, 3000);
      return;
    }

    setActiveStep(activeStep + 1);
  };

  const { errors, touched, values, handleChange, handleBlur } = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleNext,
  });

  const formProps: IFormProps = {
    values,
    errors,
    touched,
    handleChange,
    handleBlur,
  };

  const buttonDisabled = activeStep
    ? errors.gender || errors.description || errors.like
    : errors.firstName ||
      errors.lastName ||
      errors.privacyPolicy ||
      errors.age ||
      errors.rate;

  const handleBack = () => {
    setActiveStep(activeStep - 1);
  };

  const closeModal = () => {
    location.reload();
  };

  return (
    <Container component="main" maxWidth="md" sx={{ mb: 4 }}>
      <Dialog open={isAlertOpen} onClose={closeModal}>
        <Alert icon={false} severity="success">
          {alertMessage !== "Submitting..." ? (
            <AlertTitle>Success</AlertTitle>
          ) : (
            <LinearProgress sx={{ mb: 2 }} />
          )}

          {alertMessage}
        </Alert>
      </Dialog>

      <Paper
        variant="outlined"
        sx={{
          my: { xs: 3, md: 6 },
          p: { xs: 2, md: 3 },
          borderRadius: 2,
        }}
      >
        <Stepper activeStep={activeStep} sx={{ pt: 3, pb: 5 }}>
          {[...Array(steps)].map((_, i) => (
            <Step key={i}>
              <StepLabel></StepLabel>
            </Step>
          ))}
        </Stepper>

        {getStepContent(activeStep, formProps)}

        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: 2,
          }}
        >
          <Button onClick={handleBack} disabled={!activeStep}>
            Back
          </Button>

          <Button disabled={!!buttonDisabled} onClick={handleNext}>
            {activeStep === steps - 1 ? "Submit" : "Next"}
          </Button>
        </Box>
      </Paper>
    </Container>
  );
};

export default Checkout;
