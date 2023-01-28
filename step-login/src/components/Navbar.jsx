import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Topography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core';



const classes = theme => ({
    title: {
        flexGrow: 1
    }
})

class NavBar extends Component {
    render() {
        const title = this.props.title || "Step Login";
        return (
            <AppBar position='static'>
                <ToolBar>
                    <Topography variant='h6' className={classes.title} >{title}</Topography>
                </ToolBar>
            </AppBar>
        )
    }
}


export default NavBar