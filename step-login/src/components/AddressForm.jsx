import React, { Component } from 'react';
//
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'
//
import FastForwardIcon from '@material-ui/icons/FastForward';
import FastRewindIcon from '@material-ui/icons/FastRewind';
//
import FormLayout from '../layout/form.layout';
import ButtonsLayout from '../layout/buttons.layout';
import TextField from './TextField';
import Countries from '../consts/countries.json'


class AddressForm extends Component {

    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }

    render() {
        const { values, changeHandler } = this.props;
        return (
            <React.Fragment>
                    <FormLayout>
                        <Select fullWidth value={values.country} onChange={changeHandler('country')} label="Country">
                            {
                                Countries.map((item, index) => <MenuItem key={`${index}-${item.code}`} value={item.name}>{item.name}</MenuItem>)
                            }
                        </Select>
                        <TextField label="State" placeholder="Enter Your State" changeHandler={changeHandler} value={values.state} valueKey="state" />
                        <ButtonsLayout>
                            <Button variant='contained' color='secondary' onClick={this.back} startIcon={<FastRewindIcon />}>Back</Button>
                            <Button variant='contained' color='primary' onClick={this.continue} endIcon={<FastForwardIcon />}>Next</Button>
                        </ButtonsLayout>
                    </FormLayout>
            </React.Fragment>
        )
    }
}

export default AddressForm;