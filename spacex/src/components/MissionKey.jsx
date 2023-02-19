import React from 'react';

export default function MissionKey(){
    return (
        <div className='my-3'>
            <p>
                <span className="px-3 mr-2 bg-info" /> Success
            </p>
            <p>
            <span className="px-3 mr-2 bg-warning" /> Fail
            </p>
        </div>
    )
}