import React, { Component } from 'react';
import axios from 'axios';

class ReflectionItem extends Component {    
    bookmark(item) {
        // console.log(item.item.bookmarked);
        item.item.bookmarked = !item.item.bookmarked
        axios.put(`/reflection?id=`+ item.item.id, item.item).then((response) => {
            console.log('Put reponse', response);  
            this.props.getReflection(); 
        }).catch((err) => {
            console.log('error in put', err);
        })
    }

    delReflection(item){
        axios.delete(`/reflection/?id=`+ item.item.id).then((response) => {
            console.log('Reflection has been deleted');
            this.props.getReflection();            
        }).catch((err) => {
            console.log('Error in delete', err);            
        })
    }

    handleBookmark = () => {        
        this.bookmark(this.props)
    }

    handleDelete = () => {               
        this.delReflection(this.props)
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

    render() {
        return (
            <div>
                <p>{this.props.item.topic} {this.props.item.description} {this.props.item.date} </p>
                <button onClick={this.handleBookmark}>bookmark</button>
                <button onClick={this.handleDelete}>delete</button>
            </div>
        )
    }
}

export default ReflectionItem