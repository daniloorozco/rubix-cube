import React, { Component } from 'react';
import styled from 'styled-components';
import Shuffle from './Shuffle';
import Solve from './Solve';
import Typing from 'react-typing-animation';
import Cube, { cubeWidth, facePosition } from './Cube';
import {
    calcPosition,
    calculateResultantAngle,
    getCubePositionDiffrence,
    getTouchPositions
} from '../utilities/utilities';

class Interface extends Component{
    
    render(){
        return (
        <StyledSection>
        
            <h1>Rubiks Cube Simulator</h1>
            <br/>
            <br/>
            <Shuffle/> &nbsp;&nbsp; <Solve/>

            <Typing startDelay={1000}>
                
                <p>Click outside of Cube to rotate the whole Cube.</p>
                <Typing.Delay ms={5000} />
                <Typing.Backspace count={47} />
                <p>Click a side of the Cube to move the side.</p>
                <Typing.Delay ms={5000} />
                <Typing.Backspace count={51} />

            </Typing>
           
    
        </StyledSection>
        
        );
    }
}

/*Typing text animation: https://www.npmjs.com/package/react-typing-animation */

const StyledSection = styled.div `

    margin: 10px;
    padding: 50px;
    height: 100%;
    width: 50%;
    position: absolute;
    top: 0;

    h1 {
        font-size: calc(35px + 1vw);
        position: relative;
        animation: fadeInAnimation ease 1s; 
            animation-iteration-count: 1; 
            
            animation: fadeInAnimation 1s ease-out forwards;
        } 
        @keyframes fadeInAnimation { 
            from {top:0px; opacity: 0;}
            to {top:20px; opacity: 1;}
        } 
    }

    p {
        bottom: 20%;
        position: absolute;
    }

`

export default Interface;