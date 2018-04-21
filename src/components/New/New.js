import React, { Component } from 'react';

// New is where we will be placing all input data for each reflection
class New extends Component {
    state = {
        topic: '',
        reflection: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.props.dispatch({
            type: 'ADD_REFLECTION',
            payload: {
                topic: this.state.topic,
                reflection: this.state.reflection
            }
        })
    }

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
                <form>
                    <h1>New Reflection</h1>
                    Topic:
                    <input onChange={this.handleChangeFor('topic')} type='text' placeholder='What are you writing about?'/>
                    Reflection:
                    <input onChange={this.handleChangeFor('reflection')} type='text' placeholder='Your reflections here'/>
                    <input type="submit" value="Submit" />
                </form>
            </div>
        )
    }
}

export default New;