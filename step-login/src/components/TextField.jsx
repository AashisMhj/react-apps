import React, { Component } from 'react';
//
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import { TextField as MTextField } from '@material-ui/core';



class TextField extends Component {
    render() {
        const {changeHandler, label, placeholder, value, valueKey } = this.props;
        return (
            <>
                <FormControl component="fieldset" style={{width: "100%"}}>
                    <FormLabel style={{paddingBottom: "20px"}} component="legend">{label}</FormLabel>
                    <MTextField
                        label={label}
                        placeholder={placeholder}
                        onChange={changeHandler(valueKey)}
                        value={value}
                        variant='outlined'
                    />
                </FormControl>
                <br />
            </>
        )
    }

}

export default TextField;