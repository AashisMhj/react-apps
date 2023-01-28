import React, {Component} from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

class Layout extends Component{
    render(){
        const {children} = this.props;
        return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm" style={{backgroundColor: "#F0EAD6", height: '100vh'}}>
                {children}
            </Container>
        </React.Fragment>
        )
    }
}

export default Layout;