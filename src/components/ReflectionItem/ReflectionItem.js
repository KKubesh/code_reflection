import React, { Component } from 'react';

class ReflectionItem extends Component {
    render() {
        console.log(this.props);
        
        return (
            <div>
                <p>{this.props.item.topic} {this.props.item.description}</p>
            </div>
        )
    }
}

export default ReflectionItem