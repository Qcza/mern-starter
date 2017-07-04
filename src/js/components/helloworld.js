import React, { Component } from 'react';

class HelloWorld extends Component {
    constructor (props) {
        super (props);
    }

    render() {
        return (
            <h1 style={{cursor: 'pointer'}} onClick={e=>this.props.changeColor(this.props.color === 'red' ? 'black' : 'red')} >Hello World!</h1>
        )
    }

}
export default HelloWorld;