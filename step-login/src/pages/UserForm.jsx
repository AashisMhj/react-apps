import React, {Component} from 'react';
//
import PersonalDetailForm from '../components/PersonalDetailForm';
import AddressForm from '../components/AddressForm';

import Steeper from '../components/Steeper';

class UserForm extends Component{
    state = {
        step: 1,
        "1": {
            label: "Personal Information",
            data: {
                firstName: '',
                lastName: '',
                email: '',
                gender: 'Male'
            }
        },
        "2": {
            label: "Address",
            data: {
                country: '',
                state: ''
            }
        },
        "3": {
            label: "Additional Information",
            data: {
                occupation: '',
                bio: ''
            }
        }
    }

    // proceede to next step
    nextStep = ()=>{
        const {step} = this.state;
        this.setState({
            step: step+1
        });
    }
    // 
    prevStep = ()=>{
        const {step} = this.state;
        this.setState({
            step: step -1
        })
    }

    // handlers
    changeHandler = input => e =>{
        const state = this.state;
        const {step} = state;
        const currentStepData = state[step].data;
        const newState = {
            ...state,
            [step]: {
                label: state[step].label,
                data: {
                    ...currentStepData,
                    [input]: e.target.value
                }
            }
        }
        this.setState(newState);
    }

    changeStep = (step) =>{
        this.setState({
            step
        })
    }
    render(){
        const {step, 1:{data:personalData}, 2:{data:addressData}, 3:AdditionalData} = this.state;
        console.log(step, 'step');
        const AllPages = [
            <PersonalDetailForm values={personalData} changeHandler={this.changeHandler} nextStep={this.nextStep} />,
            <AddressForm values={addressData} changeHandler={this.changeHandler} nextStep={this.nextStep} />
        ]
        return <>
            <Steeper steps={['Personal Info', 'Address', 'Additional', 'Confirm']} activeStep={step-1} changeStep={this.changeStep}   />
            {
                AllPages[step-1]
            }
        </>
    }
}

export default UserForm;