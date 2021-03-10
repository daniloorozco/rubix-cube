import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button';
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
            <Button text="Shuffle"/> &nbsp;&nbsp;
            <Button text="Solve"/>

            <p>Click outside of cube to rotate.</p>
            <p>Click on side of cube to move a side.</p>

    
        </StyledSection>
        
        );
    }
}

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