import React, { Component } from 'react';
//
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
//
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
//
import TextField from './TextField';
import FormLayout from '../layout/form.layout';
import ButtonsLayout from '../layout/buttons.layout';

class AdditionalForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, changeHandler } = this.props;
        return (
            <React.Fragment>
                <FormLayout>
                    <TextField label="occupation" placeholder="Enter Your Occupation" changeHandler={changeHandler} value={values.occupation} valueKey="occupation" />
                    <TextareaAutosize aria-label='maximum height' style={{width: '100%', backgroundColor: 'transparent', padding: '10px'}} placeholder='Bio' minRows={10} value={values.bio} changeHandler={changeHandler('bio')} />
                <ButtonsLayout>
                        <Button variant='contained' color='secondary' onClick={this.back} startIcon={<FastRewindIcon />}>Back</Button>
                        <Button variant='contained' color='primary' onClick={this.continue} endIcon={<FastForwardIcon />}>Next</Button>
                    </ButtonsLayout>
                </FormLayout>
            </React.Fragment>
        )
    }
}

export default AdditionalForm;