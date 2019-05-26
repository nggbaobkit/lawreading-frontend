import React, { Component } from 'react';
import { Button, Icon, Item } from 'semantic-ui-react';
import { Header, Image, Modal } from 'semantic-ui-react'
import faker from 'faker';
import axios from 'axios';
import '../../styles/App.css'
const FileDownload = require('js-file-download');

class LawContentCard extends Component {
    state = { isBought: undefined };
    
    token = localStorage.getItem('authUser');
    
    config = {
        headers: {
            Authorization: 'Bearer ' + this.token
        }
    };

    handleDownloadButtonClick = (lawid) => {
        // download audio file here
        console.log("Download button clicked")
        axios.get('https://lawreadingserver.herokuapp.com/api/download/law?id=' + lawid, this.config)
        .then ( response => {
            console.log(response)
            FileDownload(response.data, 'download.mp3');
            // console.log(response.data)
            // if (response.data.data === false) {
            //     this.setState({isBought: false})
            // }
            // if (response.data.data) {
            //     console.log("You bought this law")
            // }
        })
    }

    renderBoughtState = () => {
        console.log(this.state.isBought)
        if (this.state.isBought === false) {
            return (
                <Header as="h3">
                    Bạn vẫn chưa mua bộ luật này...
                </Header>
            )
        }
    }

    render() { 
        return ( 
            <Item style={{padding: '60px', margin: '20px', backgroundColor:''}}>
                <Item.Image src={require('../../images/justice.jpg')} />
        
                <Item.Content>
                <Item.Header as='a'>{this.props.name}</Item.Header>
                <Item.Meta>
                    <span className='cinema'>{this.props.date}</span>
                </Item.Meta>
                <Item.Description>{this.props.content}</Item.Description>
                <Item.Extra>
                    <Button>Hi Button</Button>
                    <Button icon='globe' content='Additional Buttons' />
                </Item.Extra>
                <Item.Extra>
                
                <Modal trigger={<Button primary color="pink" floated='right' >Xem thêm <Icon className='right chevron' /> </Button>}>
                    <Modal.Header className="my-header" >{this.props.name}</Modal.Header>
                    <Modal.Content image>
                    <Image wrapped size='huge' src={require('../../images/justice.jpg')} />
                    <Modal.Description>
                        <Header>{this.props.date}</Header>
                        <p>{this.props.content}</p>
                        {/* <p>{faker.lorem.paragraphs()}</p>
                        <p>{faker.lorem.paragraphs()}</p>
                        <p>{faker.lorem.paragraphs()}</p>
                        <p>{faker.lorem.paragraphs()}</p>
                        <p>{faker.lorem.paragraphs()}</p> */}
                    </Modal.Description>
                    </Modal.Content>
                    <Modal.Actions>
                    <Button primary onClick={() => this.handleDownloadButtonClick(this.props.lawid)}>
                        Tải audio <Icon name='right chevron' />
                    </Button>
                    {this.renderBoughtState()}
                    </Modal.Actions>
                </Modal>
                
                </Item.Extra>
                </Item.Content>
            </Item>
            
        )
    }
}
 
export default LawContentCard;