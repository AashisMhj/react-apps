import React, { Fragment } from 'react';
import gql from 'graphql-tag';
import {Query} from 'react-apollo';

const ROCKET_QUERY = gql`
query RocketDetail($id: Int!){
    rocket(id: $id){
        id
        name
        type
    }
}`

export default function RocketDetail({id}){
    return (
        <Fragment>
            <Query query={ROCKET_QUERY} variables={{id}}>
                {
                    ({loading, error, data})=>{
                        if(loading) return <h4>Loading</h4>;
                        if(error) {console.log(error); return <h4>Error</h4>}
                        const {name, id, type} = data.rocket;
                        return <ul>
                            <li className='list-group-item'>Rocket Id: {id}</li>
                            <li className='list-group-item'>Rocket Name: {name}</li>
                            <li className='list-group-item'>Rocket Type: {type}</li>
                        </ul>
                    }
                }
            </Query>
        </Fragment>
    )
}