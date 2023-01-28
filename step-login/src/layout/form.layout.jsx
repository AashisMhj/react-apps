import React, { Component } from 'react';
import Box from '@material-ui/core/Box';


class FormLayout extends Component {
    render() {
        const { children } = this.props;
        return (
            <Box style={{display: "flex", flexDirection: 'column',padding: "10px", alignItems: 'center', justifyContent: 'center'}}>
                {children}
            </Box>
        )
    }
}

export default FormLayout;