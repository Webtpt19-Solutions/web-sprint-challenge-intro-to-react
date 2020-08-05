// Write your Character component here
import React from 'react';

const Character = ({char}) => {

    return(
        <div>
            <h1>{char.name}</h1>
        </div>
    )
};

export default Character;