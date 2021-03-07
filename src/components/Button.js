import React, { Component } from 'react';
import styled from 'styled-components';


class Button extends React.Component {
    render() {
        return (
          <StyledButton>
            {this.props.text}
          </StyledButton>
        );
    }
}

const StyledButton = styled.button `

    background-color: #ff4081;
    color: white;
    padding: 5px 15px;
    border-radius: 10px
    
`

export default Button;