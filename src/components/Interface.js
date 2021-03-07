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
        <StyledSection className="light-header">
        
            <h1>Rubiks Cube Simulator</h1>
        
            <Button text="Shuffle"/>
                
            
        

        </StyledSection>
        
        );
    }
}

const StyledSection = styled.section `

    'margin': 10,
    'height': '100%',
    'backgroundColor': 'lightblue',
    'width': 500,
    'position': 'absolute',
    'top': '0',
    'left': '0'

`

export default Interface;