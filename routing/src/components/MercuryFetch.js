import React from 'react';


function MercuryFetch(props) {
    return ( <p>Mercury retrograde: <b>{props.retrograde !== null ? props.retrograde.toString() : null}</b></p>);
}
export default MercuryFetch;