import React, { Component } from 'react';
import Cube, { cubeWidth, facePosition } from './Cube';
import {
    calcPosition,
    calculateResultantAngle,
    getCubePositionDiffrence,
    getTouchPositions
} from '../utilities/utilities';

class Interface extends Component{
    render(){
        return <h1>Rubiks Cube Simulator</h1>
    }
}

export default Interface;