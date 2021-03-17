import React from 'react';
import Button from './Button';

function Solve(){
    function clickHandler(){
        console.log('Solving the Cube')
    }
    return(
        <div>
            <Button onClick={clickHandler} text="solve"></Button>
        </div>
    )
}

export default Solve;
