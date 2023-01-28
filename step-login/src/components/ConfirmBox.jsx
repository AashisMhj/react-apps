import React, { Component } from 'react';
//
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
//
import Check from '@material-ui/icons/Check';
import FastRewindIcon from '@material-ui/icons/Check';
//
import ButtonsLayout from '../layout/buttons.layout';
import { Button } from '@material-ui/core';

class ConfirmBox extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();
    }

    back = e =>{
        e.preventDefault();
        this.props.prevStep();
    }
    render() {
        const { dataItems } = this.props;
        return (
            <>
                <TableContainer>
                    {
                        Object.keys(dataItems).map((item, index) => {
                            return (
                                <Table aria-label='simple table' key={index}>
                                    <TableHead>
                                        <TableRow>
                                            <TableCell>
                                                <Typography variant='h6'>{dataItems[item].label}</Typography>
                                            </TableCell>
                                        </TableRow>
                                    </TableHead>
                                    <TableBody>
                                        {
                                            Object.keys(dataItems[item].data).map((label, index) => {
                                                return (
                                                    <TableRow key={index}>
                                                        <TableCell>{label}</TableCell>
                                                        <TableCell>
                                                            {dataItems[item].data[label]}
                                                        </TableCell>
                                                    </TableRow>
                                                )
                                            })
                                        }
                                    </TableBody>
                                </Table>
                            )
                        })
                    }

                </TableContainer>
                <ButtonsLayout>
                    <Button variant='contained' color='secondary' onClick={this.back} startIcon={<FastRewindIcon />}>Back</Button>
                    <Button variant='contained' color='primary' onClick={this.continue} endIcon={<Check />}>Confirm</Button>
                </ButtonsLayout>
            </>
        )
    }
}

export default ConfirmBox;