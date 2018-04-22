import React, { Component } from 'react';
import axios from 'axios';

// New is where we will be placing all input data for each reflection
class New extends Component {
    state = {
        topic: '',
        description: ''
    }

    addReflection(newReflection) {
        console.log(newReflection);
        // sending values via reflection
        axios.post('/reflection', newReflection).then((response) => {
          console.log('Post response', response);
        }).catch((err) => {
          console.log(err);
        })
    }

    // On submit run these fuctions
    handleSubmit = (event) => {
        event.preventDefault();
        this.addReflection(this.state.input);
        
    }

    // pushes values into the proper location based on property name
    handleChangeFor = (propertyName) => {
        return (event) => {
          this.setState({
              input: {
                  ...this.state.input,
                  [propertyName]: event.target.value
              }
          });
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <h1>New Reflection</h1>
                    Topic:
                    <input onChange={this.handleChangeFor('topic')} type='text' placeholder='What are you writing about?'/>
                    Reflection:
                    <input onChange={this.handleChangeFor('description')} type='text' placeholder='Your reflections here'/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default New;