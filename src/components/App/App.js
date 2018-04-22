import React, { Component } from 'react';
import './App.css';
import Nav from '../Nav/Nav'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


// const theme = createMuiTheme({
//   palette: {
//     primary: blue
//   }
// })


// app is the parent to all content and header
class App extends Component {
  render() {
    return (
      <MuiThemeProvider >
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Oh, the places you've been</h1>
            <h4><i>Reflection Board</i></h4>
          </header>
          <Nav />
          <br/>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
