import React, {Component} from 'react';
//
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
//
import NavBar from './Navbar';
import TextField from './TextField';
import FormLayout from '../layout/form.layout';
import ButtonsLayout from '../layout/buttons.layout';

class AdditionalForm extends Component{
    continue = e=>{
        e.preventDefault();
        this.props.nextStep();
    }

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }

    render (){
        const {values, changeHandler}  = this.props;
        return (
            <React.Fragment>
                <NavBar title="Additional Details" />
                <FormLayout>
                    <TextField label="occupation" placeholder="Enter Your Occupation" changeHandler={changeHandler} value={values.occupation} valueKey="occupation" />
                </FormLayout>
                <ButtonsLayout>
                    <Button variant='contained' color='secondary' onClick={this.back}>Back</Button>
                    <Button variant='contained' color='primary' onClick={this.continue}>Finish</Button>
                </ButtonsLayout>
            </React.Fragment>
        )
    }
}

export default AdditionalForm;