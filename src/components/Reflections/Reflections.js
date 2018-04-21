import React, { Component } from 'react';

// users list of different reflections should go here
class Reflections extends Component {
    componentDidMount() {
        this.props.dispatch({
            type: 'FETCH_REFLECTIONS'
        })
    }

    render() {
        return (
            <h1>All Reflection</h1>
        )
    }
}

export default Reflections;