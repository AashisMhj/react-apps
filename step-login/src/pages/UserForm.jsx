import React, {Component} from 'react';
//
import PersonalDetailForm from '../components/PersonalDetailForm';
import AddressForm from '../components/AddressForm';
import AdditionalForm from '../components/AdditonalForm';
import ConfirmBox from '../components/ConfirmBox';
import Steeper from '../components/Steeper';
import FinalScreen from '../components/FinalScreen';

class UserForm extends Component{
    state = {
        step: 1,
        data: {
            "1": {
                label: "Personal Information",
                data: {
                    firstName: 'First',
                    lastName: 'Name',
                    email: 'email@email.com',
                    gender: 'Male'
                }
            },
            "2": {
                label: "Address",
                data: {
                    country: '',
                    state: 'state'
                }
            },
            "3": {
                label: "Additional Information",
                data: {
                    occupation: 'occu',
                    bio: 'bio'
                }
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
        const userData = state.data;
        const currentStepData = userData[step].data;
        const newState = {
            ...state,
            data: {
                ...userData,
                [step]: {
                    label: state.data[step].label,
                    data: {
                        ...currentStepData,
                        [input]: e.target.value
                    }
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
        const {step, data:{1:{data:personalData}, 2:{data:addressData}, 3:{data: additionalData}}} = this.state;
        const AllPages = [
            <PersonalDetailForm values={personalData} changeHandler={this.changeHandler} nextStep={this.nextStep} />,
            <AddressForm values={addressData} changeHandler={this.changeHandler} nextStep={this.nextStep} prevStep={this.prevStep} />,
            <AdditionalForm values={additionalData} changeHandler={this.changeHandler} nextStep={this.nextStep} prevStep={this.prevStep} />,
            <ConfirmBox dataItems={this.state.data} nextStep={this.nextStep} prevStep={this.prevStep} />,
            <FinalScreen />
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