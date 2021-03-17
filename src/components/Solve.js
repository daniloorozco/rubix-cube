import React from 'react';
import Button from './Button';
import styled from 'styled-components';


function Solve(){
    function clickHandler(){
        console.log('Solving the Cube')
    }
    return(
        <div>
            <StyledButton onClick={clickHandler}>Solve</StyledButton>
        </div>
    )
}

const StyledButton = styled.button `
    background-color: #ff4081;
    font-weight: bold;
    color: white;
    width: 100px;
    height: 40px;
    padding: 5px 15px;
    border-radius: 50px;
    outline: 0;
    text-transform: uppercase;
    box-shadow: 0px 2px 2px lightgray;
    cursor: pointer;
    transition: ease background-color 250ms;
    &:hover {
        background-color: #c51162;
    }
`

export default Solve;
