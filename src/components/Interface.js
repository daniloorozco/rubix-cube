import React, { Component } from 'react';
import styled from 'styled-components';
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
        <div className="light-header">
        
            <h1>Rubiks Cube Simulator</h1>
        
            <Button className="Shuffle" onClick={function() { alert('click'); }}>
                {this.props.value}
            </Button>
        

        </div>
        
        );
    }
}

const Button = styled.button`

`

export default Interface;