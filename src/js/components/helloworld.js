import React, { Component } from 'react';

class HelloWorld extends Component {
    constructor (props) {
        super (props);
    }

    render() {
        return (
            <h1 title="click me!" style={{cursor: 'pointer', color: this.props.color}} onClick={e=>this.props.changeColor(this.props.color === 'red' ? 'black' : 'red')} >Hello World!</h1>
        )
    }

}
export default HelloWorld;