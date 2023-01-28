import React, { Component, Children } from 'react';
import Grid from '@material-ui/core/Grid';


class ButtonsLayout extends Component {
    render() {
        const arrayChildren = Children.toArray(this.props.children);
        return (
            <Grid container spacing={3} justifyContent="space-evenly" alignItems='center' >
                {
                    Children.map(arrayChildren, (child, index) =>{
                        return (
                            <Grid key={index} item xs={12} sm={3}>
                                {child}
                            </Grid>
                        )
                    })
                }
               
            </Grid>
        )
    }
}

export default ButtonsLayout;