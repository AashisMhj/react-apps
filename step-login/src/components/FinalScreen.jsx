import React, { Component } from 'react';
//
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
//


class FinalScreen extends Component {
    render() {
        return (
            <Box display="flex" flexDirection="column" textAlign="center" justifyContent="center" alignItems="center">
                <Box>
                    <Typography variant='h6' >Thank You for your Time</Typography>
                </Box>
                <Box>
                    <Typography variant='h4' >Good Bye</Typography>
                </Box>
            </Box>
        )
    }
}

export default FinalScreen;