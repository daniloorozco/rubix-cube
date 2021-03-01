import React, { Component } from 'react';
import CubeContainer from './CubeContainer';
import Interface from './Interface';


class App extends Component {
    render() {
        return (
            <div className="app">
                <Interface/>
                <CubeContainer/>
            </div>
        );
    }
}

export default App;
