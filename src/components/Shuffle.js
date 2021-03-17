import React from 'react';
import Button from './Button';

function Shuffle(){

    function clickHandler(){
        console.log('Shuffling the Cube')
    }
    return(
        <div>
            <Button onClick={clickHandler()} text="shuffle"></Button>
        </div>
    )
}

export default Shuffle;
