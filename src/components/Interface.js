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
        
            <Button text="Shuffle"/>
    
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

`

export default Interface;