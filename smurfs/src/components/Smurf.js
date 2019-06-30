import React from 'react';

const Smurf = props => {
    return (
        <div className="smurf-card">
            <h4>{props.smurf.name}</h4>
            <p><strong>HEIGHT:</strong>{props.smurf.height}</p>
            <p><strong>AGE:</strong>{props.smurf.age}</p>
            <button onClick={() => props.deleteSmurf(props.smurf.id)}>Remove Smurf</button>
        </div>
    )
}

export default Smurf;