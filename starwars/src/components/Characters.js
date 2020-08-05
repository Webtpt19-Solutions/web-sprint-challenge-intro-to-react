import React from 'react';
import Character from './Character.js';

const Characters = (props) => {
    const { charList } = props
    console.log('CharList', charList)
    return (
        <div>
            {charList.map((char, i) => {
                return <Character char={char} key={i}/>
            })}
        </div>
        
    )
};

export default Characters