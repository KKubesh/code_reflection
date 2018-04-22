import React, { Component } from 'react';
import {Bookmark} from 'material-ui/svg-icons/action/bookmark';
import ToggleDisplay from 'react-toggle-display';

class ToggleButton extends Component {
    doSomething = () => {
        console.log('clicked');
    }

    render(){
        console.log(this.props);
        
        return (
            <p>hi</p>
        )
    }
}

export default ToggleButton;