import React from 'react';
import Smurf from './Smurf';

const SmurfList = props => {
    return (
        <div>
            <h2>Welcome to the Smurf Village</h2>
            <div className='smurf-list-wrapper'>
                {props.smurfs.map((smurf, index) => <
                    Smurf key={index}
                    smurf={smurf}
                    deleteSmurf={props.deleteSmurf}
                />)}
            </div>
        </div>
    )
}

export default SmurfList;