import React, { Component } from 'react';
import axios from 'axios';
import moment from 'moment';
import ToggleDisplay from 'react-toggle-display';
import { Bookmark, BookmarkBorder, Delete  } from 'material-ui-icons';
import {Card, CardTitle, CardText} from 'material-ui/Card';
import './ReflectionItem.css'



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
        let time = moment(`${this.props.item.date}`).format(`dddd, MMMM Do YYYY`);
        return (
            <Card className="cardWidth">
                <CardTitle title={this.props.item.topic} subtitle={time} />
                <CardText> {this.props.item.description} </CardText>
                <div>
                    <ToggleDisplay show={this.props.item.bookmarked}>
                        <Bookmark onClick={this.handleBookmark}/>                   
                    </ToggleDisplay>
                </div>
                <div>
                    <ToggleDisplay hide={this.props.item.bookmarked}>
                        <BookmarkBorder onClick={this.handleBookmark}/>                   
                    </ToggleDisplay>
                </div>
                <Delete onClick={this.handleDelete}/>
            </Card>
        )
    }
}

export default ReflectionItem;