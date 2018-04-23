import React, { Component } from 'react';
// import { ToggleRadioButtonChecked } from 'material-ui';
// import IconButton from 'material-ui/IconButton';
import {Bookmark} from 'material-ui/svg-icons/action/bookmark';
// import ToggleIcon from 'material-ui-toggle-icon';
import ToggleDisplay from 'react-toggle-display';

class ToggleButton extends Component {
    doSomething = () => {
        console.log('clicked');
    }

    render(){
        console.log(this.props);
        
        return (
            
            <p>Hi</p>
            // <IconButton>
            //     < ToggleIcon onClick={this.doSomething}
            //         on={this.props.item.bookmarked}
            //         onIcon={<Bookmark />}
            //         offIcon={<BookmarkBorder />}
            //     />
            // </IconButton>
            // <div>
            //     <ToggleDisplay if={this.props.item.bookmarked}><Bookmark/></ToggleDisplay>
            // </div>
        )
    }
}

export default ToggleButton;