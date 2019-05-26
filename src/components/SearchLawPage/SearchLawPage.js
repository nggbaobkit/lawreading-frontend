import React, { Component } from 'react';
import SearchLawForm from './SearchLawForm.js';
import LawContentCard from './LawContentCard';
import faker from 'faker';
import { Item } from 'semantic-ui-react'
import SoundPlayer from '../SoundPlayer/SoundPlayer';
import axios from 'axios';

class SearchLawPage extends Component {
    state = { data: [] }

    onFormSubmit = (term, category) => {
        axios.get('https://lawreadingserver.herokuapp.com/api/elastic/search?q=' + term + '&option=' + category ).then( res => {
            console.log("Return data: " + res.data)
            this.setState({data: res.data})
        } )
    }

    onButtonClick = (lawid) => {
        console.log(lawid);
    }

    renderContent = (data) => {
        console.log("Number of  data return: " + data.length + " object")
        if (data.length !==0) {
            return data.map( (item) => {
                console.log(item)
                return (
                    <LawContentCard 
                        key = {item.id}
                        lawid = {item.id}
                        imgSrc={faker.image.avatar()} 
                        name = {item.name}
                        date = {item.issueDate}
                        content = {item.content}
                        onButtonClick={this.onButtonClick}/>
                )
            } )
        }

    }

    render() { 
        const data = this.state.data
        return ( 
            <div>
                <SearchLawForm onSubmit={this.onFormSubmit}/>

                <Item.Group divided style={{margin:"40px"}}>
                    {this.renderContent(data)}
                </Item.Group>       
            </div>
        );
    }
}
 
export default SearchLawPage;