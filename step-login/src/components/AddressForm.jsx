import React, { Component } from 'react';
//
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select'
import InputLabel from '@material-ui/core/InputLabel';
//
import NavBar from './Navbar';
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
                <NavBar title="Address" />
                    <FormLayout>
                        <InputLabel>Country</InputLabel>
                        <Select value={values.country} onChange={changeHandler('country')}>
                            {
                                Countries.map((item, index) => <MenuItem key={`${index}-${item.code}`} value={item.name}>{item.name}</MenuItem>)
                            }
                        </Select>
                        <TextField label="State" placeholder="Enter Your State" changeHandler={changeHandler} value={values.state} valueKey="state" />
                        <ButtonsLayout>
                            <Button variant='contained' color='secondary' onClick={this.back}>Back</Button>
                            <Button variant='contained' color='primary' onClick={this.continue}>Next</Button>
                        </ButtonsLayout>
                    </FormLayout>
            </React.Fragment>
        )
    }
}

export default AddressForm;