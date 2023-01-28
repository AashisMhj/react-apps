import React, { Component, Children } from 'react';
//
import Grid from '@material-ui/core/Grid';

class FormLayout extends Component {
    render() {
        const arrayChildren = Children.toArray(this.props.children);
        return (
            <Grid container style={{marginTop: "5px"}} spacing={5} alignItems='center'>
                {
                    Children.map(arrayChildren, (child, index) => {
                        return (
                            <Grid key={index} item sm={12}>
                                {child}
                            </Grid>
                        )
                    })
                }

            </Grid>
        )
    }
}

export default FormLayout;