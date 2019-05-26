import React from "react";
import styled from "styled-components";
import { NavLink , withRouter} from "react-router-dom";
import LoginModal from '../LoginPage/LoginModal.js';

class Header extends React.Component {
  state = {  }

  onFormSubmit = (username, password) => {
    console.log(username, password)
  }

  render() { 
    return ( 
      <Wrapper style={{display: "flex", justifyContent: "space-between"}}>
        <ul>
          <li><NavLink to="/" activeClassName="NavLinkActive" exact>Trang chủ</NavLink> </li>
          <li><NavLink to="/search" activeClassName="NavLinkActive">Tra cứu</NavLink></li>
          <li><NavLink to="/createaudio" activeClassName="NavLinkActive">Tạo audio</NavLink></li>
          <li><NavLink to="/third" activeClassName="NavLinkActive">Utils</NavLink></li>
        </ul>
        <div style={{marginRight:'3.5em'}}>
          <LoginModal onSubmit={this.onFormSubmit}/>
        </div>
      </Wrapper>
    );
  }
}
 
export default withRouter( Header);
 
const Wrapper = styled.div`
  height: 65px;
  display: flex;
  align-items: center;
  background-color: #f5f5f5;
  ul {
    margin: 16px;
    padding: 0;
  }
  li {
    display: inline-block;
    margin-left: 40px;
    a {
      text-decorat  ion: none;
      font-size: 20px;
      color: #333;
    }
  }
`;

// export default Header;