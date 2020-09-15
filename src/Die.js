import React, { Component } from 'react';
import './die.css';

class Die extends Component {
    render() {
        return(
            <div>
                <h1>
                    <i class={`die fas fa-dice-${this.props.face} ${this.props.rolling ? "shaking" : ""}`}/>
                </h1>
            </div> 
        )
    }
}

export default Die;