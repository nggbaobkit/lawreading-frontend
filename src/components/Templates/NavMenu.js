import React, { Component } from 'react'
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from "react-router-dom";
import LoginModal from '../LoginPage/LoginModal.js';
import axios from 'axios';

export default class MenuExampleInvertedSecondary extends Component {
  state = { activeItem: 'home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })
  
  onFormSubmit = (username, password) => {
    // console.log(username, password)

    // axios.post('http://127.0.0.1:3004/api/users/login', {
    //   username: username,
    //   password: password
    // } ).then ( response => {
    //   localStorage.setItem('authUser', response.data.data.token);
    //   localStorage.setItem('id', response.data.data.id);
    //   history.pushState('/')
    // })
    // login call here
  }

  render() {
    const { activeItem } = this.state
    return (
      <Segment inverted>
        <Menu inverted pointing secondary size="huge">
          <Menu.Item name='home' active={activeItem === 'home'} onClick={this.handleItemClick}>
            <Link to="/">Trang chủ</Link>
          </Menu.Item>
          <Menu.Item
            name='search'
            active={activeItem === 'search'}
            onClick={this.handleItemClick}>
            <Link to="/search">Tra cứu</Link>
          </Menu.Item>
          <Menu.Item
            name='createaudio'
            active={activeItem === 'createaudio'}
            onClick={this.handleItemClick}>
            <Link to="/createaudio">Tạo audio</Link>  
          </Menu.Item>
          <Menu.Item
            name='test'
            active={activeItem === 'test'}
            onClick={this.handleItemClick}>
            <Link to="/test">Test chức năng</Link>  
          </Menu.Item>
          <Menu.Item
            position='right'>
            <LoginModal onSubmit={this.onFormSubmit}/>
          </Menu.Item>
          
        </Menu>
      </Segment>
    )
  }
}