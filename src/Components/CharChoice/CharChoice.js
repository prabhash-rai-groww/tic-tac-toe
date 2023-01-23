import React from 'react';
import './CharChoice.css';

function CharChoice ({selectChar}) {
    
    function choose(value) {
        selectChar(value);
    }
    
    return (
        <div className='CharChoice'>
            Choose a character for first player =&gt;

            <div className='buttons'>
                <button className='button choose_button' onClick={() => {choose('X')}}> X </button>
                <button className='button choose_button' onClick={() => {choose('O')}}> O </button>
            </div>
        </div>
    )
}

export default CharChoice;
