import React, { useState, useEffect } from "react";

import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Stack from "@mui/material/Stack";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import StepConnector, {
    stepConnectorClasses,
} from "@mui/material/StepConnector";
import { Container, Box, Button, Grid } from "@mui/material";
import Personal from "./Personal";
import Complex from "./Complex";
import Parking from "./Parking";
import Confirmation from "./Confirmation";
import Complete from "./Complete";

const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 22,
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "#186FE7",
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            backgroundColor: "#186FE7",
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        height: 1,
        border: 0,
        backgroundColor:
            theme.palette.mode === "dark" ? theme.palette.grey[800] : "#969696",
        borderRadius: 1,
    },
}));

const ColorlibStepIconRoot = styled("div")(({ theme, ownerState }) => ({
    backgroundColor:
        theme.palette.mode === "dark" ? theme.palette.grey[700] : "#f5f5f5",
    zIndex: 1,
    color: "#969696",
    border: "1px solid #969696",
    width: 50,
    height: 50,
    display: "flex",
    borderRadius: "50%",
    justifyContent: "center",

    alignItems: "center",
    ...(ownerState.active && {
        backgroundColor: "#186FE7",
        border: "1px solid #fff",
        color: "#fff",
        boxShadow: "0 4px 10px 0 rgba(0,0,0,.25)",
    }),
    ...(ownerState.completed && {
        backgroundColor: "#186FE7",
        border: "1px solid #186FE7",
        color: "#fff",
    }),
}));

function ColorlibStepIcon(props) {
    const { active, completed, className } = props;

    const icons = {
        1: 1,
        2: 2,
        3: 3,
        4: 4,
        5: 5,
    };

    return (
        <ColorlibStepIconRoot
            ownerState={{ completed, active }}
            className={className}
        >
            {icons[String(props.icon)]}
        </ColorlibStepIconRoot>
    );
}

ColorlibStepIcon.propTypes = {
    /**
     * Whether this step is active.
     * @default false
     */
    active: PropTypes.bool,
    className: PropTypes.string,
    /**
     * Mark the step as completed. Is passed to child components.
     * @default false
     */
    completed: PropTypes.bool,
    /**
     * The label displayed in the step icon.
     */
    icon: PropTypes.node,
};

const steps = [
    "Personal Information",
    "Complex Information",
    "Parking Information",
    "Confirmation",
    "Complete",
];

export default function SignUp() {
    const [activeStep, setActiveStep] = React.useState(0);
    const [formData, setFormData] = useState({
        name: "",
        mail: "",
        phone: "",
        pass: "",
        rePass: "",
        role: "",
        comName: "",
        comAddress: "",
        comUnit: "",
        comMail: "",
        comPhone: "",
        gate: "placeholder",
        fileName: "",
        pSpot: "",
        pNumber: "",
        pNumGuest: "",
        pAdmin: "",
        pHandcap: "",
        pSystem: "placeholder",
    });
    useEffect(() => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    }, [activeStep]);
    const goToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    const handleNext = () => {
        setActiveStep(activeStep + 1);
        // goToTop();
    };

    const handleBack = () => {
        setActiveStep(activeStep - 1);
        goToTop();
    };

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <Personal formData={formData} setFormData={setFormData} />
                );
            case 1:
                return (
                    <Complex formData={formData} setFormData={setFormData} />
                );
            case 2:
                return (
                    <Parking formData={formData} setFormData={setFormData} />
                );
            case 3:
                return (
                    <Confirmation
                        formData={formData}
                        setFormData={setFormData}
                    />
                );

            default:
                throw new Error("Unknown step");
        }
    }
    return (
        <Container>
            {" "}
            <Stack sx={{ width: "100%", marginBottom: "100px" }} spacing={4}>
                <Stepper
                    alternativeLabel
                    activeStep={activeStep}
                    connector={<ColorlibConnector />}
                >
                    {steps.map((label) => (
                        <Step key={label}>
                            <StepLabel StepIconComponent={ColorlibStepIcon}>
                                {label}
                            </StepLabel>
                        </Step>
                    ))}
                </Stepper>
            </Stack>
            {activeStep === steps.length - 1 ? (
                <>
                    <Complete formData={formData} setFormData={setFormData} />
                </>
            ) : (
                <>
                    {getStepContent(activeStep)}
                    <Container maxWidth="md" sx={{ marginBottom: "100px" }}>
                        {" "}
                        <Grid container>
                            <Grid item xs={5}></Grid>
                            <Grid item xs={7}>
                                <Box
                                    sx={{ maxWidth: "400px", display: "flex" }}
                                >
                                    {activeStep !== 0 && (
                                        <Button
                                            onClick={handleBack}
                                            sx={{ mt: 3, ml: 1 }}
                                        >
                                            Back
                                        </Button>
                                    )}
                                    <Button
                                        size="large"
                                        variant="contained"
                                        fullWidth
                                        onClick={handleNext}
                                        sx={{
                                            mt: 3,
                                            ml: 1,
                                            borderRadius: "8px",
                                        }}
                                    >
                                        {activeStep == 3
                                            ? "Complete"
                                            : "Continue"}
                                    </Button>
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </>
            )}
        </Container>
    );
}
