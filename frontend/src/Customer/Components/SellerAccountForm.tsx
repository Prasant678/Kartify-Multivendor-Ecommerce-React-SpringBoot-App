import { Check } from '@mui/icons-material';
import { Button, Step, StepLabel, Stepper } from '@mui/material';
import React, { useState } from 'react'
import { styled } from '@mui/material/styles';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import type { StepIconProps } from '@mui/material/StepIcon';
import BecomeSellerStep1 from './BecomeSellerStep1';
import { useFormik } from 'formik';
import BecomeSellerStep2 from './BecomeSellerStep2';
import BecomeSellerStep3 from './BecomeSellerStep3';
import BecomeSellerStep4 from './BecomeSellerStep4';

const steps = [
    "Text Details & Mobile",
    "Pickup Address",
    "Bank Details",
    "Supplier Details"
]

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: '#784af4',
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
        ...theme.applyStyles('dark', {
            borderColor: theme.palette.grey[800],
        }),
    },
}));

const QontoStepIconRoot = styled('div')<{ ownerState: { active?: boolean } }>(
    ({ theme }) => ({
        color: '#eaeaf0',
        display: 'flex',
        height: 22,
        alignItems: 'center',
        '& .QontoStepIcon-completedIcon': {
            color: '#784af4',
            zIndex: 1,
            fontSize: 18,
        },
        '& .QontoStepIcon-circle': {
            width: 8,
            height: 8,
            borderRadius: '50%',
            backgroundColor: 'currentColor',
        },
        ...theme.applyStyles('dark', {
            color: theme.palette.grey[700],
        }),
        variants: [
            {
                props: ({ ownerState }) => ownerState.active,
                style: {
                    color: '#784af4',
                },
            },
        ],
    }),
);

function QontoStepIcon(props: StepIconProps) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon" />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}

const SellerAccountForm = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleStep = (value: number) => () => {
        (activeStep < steps.length - 1 || (activeStep > 0 && value == -1)) && setActiveStep(activeStep + value)
        activeStep == steps.length - 1 && handlesubmit();
    }
    const handlesubmit = () => {
        console.log("Create Account!");
    }
    const formik = useFormik({
        initialValues: {
            mobile: '',
            otp: '',
            gstin: '',
            pickupAddress: {
                name: '',
                mobile: '',
                pinCode: '',
                address: '',
                city: '',
                state: '',
                locality: ''
            },
            bankDetails: {
                accountNumber: '',
                ifscCode: '',
                bankName: '',
                accountHolderName: ''
            },
            sellerName: '',
            email: '',
            businessDetails: {
                businessName: '',
                businessEmail: '',
                businessMobile: '',
                logo: '',
                banner: '',
                businessAddress: ''
            },
            password: ''
        },
        // validationSchema: AddressFormSchema,
        onSubmit(values) {
            console.log(values, "formik submitted");
        },
    });
    return (
        <div>
            <Stepper alternativeLabel activeStep={activeStep} connector={<QontoConnector />}>
                {steps.map((label) => (
                    <Step key={label}>
                        <StepLabel StepIconComponent={QontoStepIcon}><p className='text-xs'>{label}</p></StepLabel>
                    </Step>
                ))}
            </Stepper>
            <section className='space-y-10'>
                <div>
                    {activeStep == 0 ? <BecomeSellerStep1 formik={formik} /> :
                        activeStep == 1 ? <BecomeSellerStep2 formik={formik} /> :
                            activeStep == 2 ? <BecomeSellerStep3 formik={formik} /> :
                                <BecomeSellerStep4 formik={formik} />}
                </div>
                <div className='flex justify-between items-center'>
                    <Button size='small' variant='contained' onClick={handleStep(-1)} disabled={activeStep == 0}>
                        <p>Back</p>
                    </Button>
                    <Button size='small' variant='contained' onClick={handleStep(1)}>
                        {activeStep == (steps.length - 1) ? <p>Create Account</p> :
                            <p>Continue</p>}
                    </Button>
                </div>

            </section>
        </div>
    )
}

export default SellerAccountForm
