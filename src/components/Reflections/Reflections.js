import React, { Component } from 'react';
import axios from 'axios';
import ReflectionItem from '../ReflectionItem/ReflectionItem'

// users list of different reflections should go here
class Reflections extends Component {
    state = {
        reflectionList: []
    }

    getReflection = () => {        
        axios.get('/reflection').then((response) => {
          this.setState({
            reflectionList: response.data
          })
        }).catch((err) => {
          console.log('error on get', err);
        })
    }

    componentDidMount() {
        this.getReflection();
    }

    render() {
        
        let reflections = this.state.reflectionList.map(item => {
            return (
                <ReflectionItem key={item.id} item={item} getReflection={this.getReflection} reflectionList={this.state.reflectionList}/>
            )
        })

        return (
            <div>
                {reflections}
            </div>
        )
    }
}

export default Reflections;