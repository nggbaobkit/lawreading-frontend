import React from 'react';
import { Button, Header, Modal, Form, Grid, Message, Segment } from 'semantic-ui-react';
import axios from 'axios';
import Homepage from '../HomePage/HomePage';

class LoginModal extends React.Component {
    state = { username: '', password: '', redirect: false, modalOpen: false, isAuthorized: false}

    handleClose = () => this.setState({ modalOpen: false })

    handleOpen = () => this.setState({ modalOpen: true })

    handleChange = (e, {name, value}) => {
        this.setState({ [name]: value})
    } 

    handleDisabilityButton = () => {
        if (localStorage.getItem('authUser')) {
            this.setState({isAuthorized: true})
        }
    }

    handleSubmit = (e) => {  
        axios.post('https://lawreadingserver.herokuapp.com/api/users/login', {
            username: this.state.username,
            password: this.state.password
            } )
        .then ( response => {
            localStorage.setItem('authUser', response.data.data.token);
            this.setState({redirect: true});
            this.handleDisabilityButton();
            this.handleClose();
        })
    }

    renderButton = () => {
        if (!this.state.isAuthorized) {
            return (
                <Button inverted basic onClick={this.handleOpen} size='huge' color='blue'>Đăng nhập</Button>
            )
        } else {
            return (
                <Button disabled inverted basic onClick={this.handleOpen} size='huge' color='blue'>Đăng nhập</Button>
            )
        }

    }

    render() { 
        return ( 
            <Modal 
                trigger={this.renderButton()}
                open={this.state.modalOpen}
                onClose={this.handleClose} >
                <Modal.Header>Đăng nhập</Modal.Header>
                <Modal.Content>
                    <div className="ui segment">
                        <div >
                        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
                            <Grid.Column style={{ maxWidth: 450 }}>
                                <Header as='h1' color='blue' textAlign='center'>
                                    Đăng nhập vào tài khoản
                                </Header>
                                <Form size='large' onSubmit={this.handleSubmit}>
                                    <Segment stacked>
                                        <Form.Input 
                                            name="username"
                                            fluid icon='user' 
                                            iconPosition='left' 
                                            value={this.state.username}
                                            onChange={this.handleChange}
                                            placeholder='Tên tài khoản' />
                                        <Form.Input
                                            fluid
                                            name="password"
                                            icon='lock'
                                            iconPosition='left'
                                            value={this.state.password}
                                            onChange={this.handleChange}
                                            placeholder='Mật khẩu'
                                            type='password'
                                        />
                                        <Button color='blue' fluid size='large' type="submit" onClick={this.handleSubmit}>
                                            Đăng nhập
                                        </Button>
                                    </Segment>
                                </Form>

                                <Message>
                                    Bạn chưa có tài khoản? <a href='www.google.com'>Đăng ký</a>
                                </Message>

                            </Grid.Column>
                        </Grid>
                        </div>
                    </div>

                </Modal.Content>
            </Modal>
        );
    }
}
 
export default LoginModal;