import React, { Component } from 'react';

export default class CoordinatesButton extends Component {

    handleButtonClick = (event) => {
        const coords = [event.clientX, event.clientY];
        this.props.onReceiveCoordinates(coords)
    }

    render() {

        return (
            <button onClick={this.handleButtonClick}>

            </button>
        )
    }
}