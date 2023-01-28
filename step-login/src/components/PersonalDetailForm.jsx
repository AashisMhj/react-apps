import React, { Component } from 'react';
//
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormLabel from '@material-ui/core/FormLabel';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { ThemeProvider as MuiThemeProvider, createTheme } from '@material-ui/core/styles';
import { orange } from '@material-ui/core/colors';
//
import NavBar from './Navbar';
import FormLayout from '../layout/form.layout';
import ButtonsLayout from '../layout/buttons.layout';
import TextField from './TextField';

const myTheme = createTheme({
    palette: {
        secondary: {
            main: orange[500]
        }
    }
})

class PersonalDetailForm extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    render() {
        const { values, changeHandler } = this.props;
        return (
            <MuiThemeProvider theme={myTheme}>
                {/* <></> can be also used instead of <React.Fragment> */}
                <React.Fragment>
                    <NavBar title="Personal Info" />
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
                            <Button variant='contained' color='primary' onClick={this.continue}>Next</Button>
                        </ButtonsLayout>
                    </FormLayout>
                </React.Fragment>
            </MuiThemeProvider>
        )
    }
}

export default PersonalDetailForm;