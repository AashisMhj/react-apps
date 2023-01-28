import React, { Component } from 'react';
//
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
//
import FastForwardIcon from '@material-ui/icons/FastForward';
//
import FormLayout from '../layout/form.layout';
import ButtonsLayout from '../layout/buttons.layout';
import TextField from './TextField';



class PersonalDetailForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, changeHandler } = this.props;
        return (
                <React.Fragment>
                    {/* <></> can be also used instead of <React.Fragment> */}
                    <FormLayout>
                        <TextField label="First Name" placeholder="Enter First Name" changeHandler={changeHandler} value={values.firstName} valueKey="firstName"  />
                        <TextField label="Last Name" placeholder="Enter Last Name" changeHandler={changeHandler} value={values.lastName} valueKey="lastName"  />
                        <TextField label="Email" placeholder="Enter Email" changeHandler={changeHandler} value={values.email} valueKey="email"  />
                        <FormControl component="fieldset">
                            <FormLabel component="legend">Gender</FormLabel>
                            <RadioGroup aria-label="gender" name="gender" value={values.gender} onChange={changeHandler('gender')}>
                                <FormControlLabel value="Female" control={<Radio />} label="Female" />
                                <FormControlLabel value="Male" control={<Radio />} label="Male" />
                            </RadioGroup>
                        </FormControl>
                        <ButtonsLayout>
                            <Button variant='contained' color='primary' onClick={this.continue} endIcon={<FastForwardIcon />}>Next</Button>
                        </ButtonsLayout>
                    </FormLayout>
                </React.Fragment>
        )
    }
}

export default PersonalDetailForm;