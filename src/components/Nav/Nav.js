import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import New from '../New/New';
import Reflections from '../Reflections/Reflections';

// general nav used to establish and link our routes
// Route reveals what we clicked on showing New Reflection form or All Reflections
class Nav extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/new">New Reflection</Link>
                            </li>
                            <li>
                                <Link to="/reflections">Reflections</Link>
                            </li>
                        </ul>
                    </nav>
                    <Route path='/new' component={New}/>
                    <Route path='/reflections' component={Reflections}/>
                </div>
            </Router>
        )
    }
}

export default Nav;