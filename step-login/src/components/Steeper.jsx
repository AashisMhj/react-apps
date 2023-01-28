import React, { Component } from 'react';
import { createStyles } from '@material-ui/core/styles';
import { Stepper as MStepper } from '@material-ui/core/';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import Typography from '@material-ui/core';


const style = createStyles((theme) => ({
    root: {
        width: '100%',
    },
    instructions: {
        marginTop: theme.spacing(1),
        marginBottom: theme.spacing(1)
    }
}));


class Steeper extends Component {
    render() {
        const { steps, activeStep, changeStep } = this.props;
        return (
            <div className={style.root}>
                <MStepper activeStep={activeStep} alternativeLabel>
                    {
                        steps.map((label, index) => (
                            <Step key={label} onClick={() => changeStep(index +1)}>
                                <StepLabel>{label}</StepLabel>
                            </Step>
                        ))
                    }
                </MStepper>
            </div>
        )
    }
}

export default Steeper;