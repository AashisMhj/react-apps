import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';

import LaunchItem from './LaunchItem';
import MissionKey from './MissionKey';

const LAUNCHES_QUERY = gql`
query LaunchesQuery{
    launches{
        id
        flight_number
        name
        date_local
        success
    }
}`;


export default class Launches extends Component {
    render() {
        return (
            <Fragment>
                <h1 className='display-4 my-3'>
                    <span className='text-dark'>Launches</span>
                </h1>
                <MissionKey />
                <Query query={LAUNCHES_QUERY}>
                    {
                        ({loading, error, data})=>{
                            if(loading) return <h4>Loading ...</h4>
                            if(error) {console.log(error); return <h4>Error</h4>}
                            return <Fragment>
                                {
                                    data.launches.map(launch=>{
                                        return <LaunchItem key={launch.id} launch={launch} />
                                    })
                                }
                            </Fragment>
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}