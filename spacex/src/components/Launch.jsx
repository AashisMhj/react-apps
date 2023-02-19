import React, {Component, Fragment} from 'react';
import Moment from 'react-moment';
import {Link} from 'react-router-dom'
import gql from 'graphql-tag';
import {Query} from 'react-apollo';
import classNames from 'classnames';

import RocketDetail from './RocketDetail';
import withRouter from '../hoc/withRouter';

const LAUNCH_QUERY = gql`
query LaunchQuery($id: String){
    launch(id: $id){
        flight_number
        name
        date_local
        success
        rocket
    }
}
`;

class Launch extends Component{
    render(){
        let {id} = this.props.params;
        return (
            <Fragment>
                <Query query={LAUNCH_QUERY} variables={{id}}>
                    {
                        ({loading, error, data})=>{
                            if(loading) return <h4>Loading</h4>
                            if(error) {console.log(error); return <h4>Error</h4>}
                            const {name, flight_number, date_local, success,rocket} = data.launch;
                            return <div>
                                <h1 className='display-4 my-3 display-4 my-3'>
                                    <span className='text-dark'>Mission</span>
                                    {name}
                                </h1>
                                <h4 className='mb-4'>Launch Details</h4>
                                <ul className='list-group'>
                                    <li className='list-group-item'>
                                        Flight Number: {flight_number}
                                    </li>
                                    <li className='list-group-item'>
                                        Launch Year: <Moment format='YYYY'>{date_local}</Moment>
                                    </li>
                                    <li className='list-group-item'>
                                        Launch Successfull: <span className={classNames({
                                            'text-success': success,
                                            'text-danger': !success
                                        })}>
                                            {success ? "YES": "NO"}
                                        </span>
                                    </li>
                                </ul>
                                <h4>Rocket Details</h4>
                                <RocketDetail id={rocket} />
                                <hr />
                                <Link to="/" className="btn btn-secondary">Back</Link>
                            </div>
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default withRouter(Launch);