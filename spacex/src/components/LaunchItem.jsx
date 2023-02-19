import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import Moment from 'react-moment';

export default function LaunchItem({ launch: { name, flight_number, date_local, success,id } }) {
    return (
        <div className='card card-body mb-3'>
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission:
                        <span className={classNames({
                            'text-success': success,
                            'text-danger': !success
                        })}>{name} </span>
                    </h4>
                    <p>Date <Moment format="YYYY-MM-DD HH:mm">{date_local}</Moment></p>
                    <p>Flight Number: {flight_number}</p>
                </div>
                <div className="col-md-3">
                    <Link to={`/launch/${id}`} className="btn btn-secondary">Launch Detail</Link>
                </div>
            </div>
        </div >
    )
}