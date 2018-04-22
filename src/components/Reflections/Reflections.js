import React, { Component } from 'react';
import axios from 'axios';
import ReflectionItem from '../ReflectionItem/ReflectionItem'

// users list of different reflections should go here
class Reflections extends Component {
    state = {
        reflectionList: []
    }

    getReflection(){
        axios.get('/reflection').then((response) => {
            console.log(response.data);  
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
        console.log(this.state.reflectionList);
        
        let reflections = this.state.reflectionList.map(item => {
            return (
                <ReflectionItem key={item.id} item={item}/>
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