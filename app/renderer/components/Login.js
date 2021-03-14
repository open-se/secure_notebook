import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components'
import { buildForge } from 'app-builder-lib';
import MenuManager from '../../singletons/menu_manager';

const LoginContainer = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  background-color: #F8F8F8;
`;

const CenteredWidget = styled.div`
  text-align: center;
  line-height: 2px;
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export default class Login extends Component {
  static propTypes = {
    onLogin: PropTypes.func.isRequired,
  };

  state = {
    username: '',
  };

  componentDidMount = () => {
    MenuManager.loadLoginMenu();
    document.body.style.margin = 0;
    document.body.style.backgroundColor = "#212121";
  };

  handleLogin = () => {
    this.props.onLogin({
      loggedIn: true,
    });
  };

  handleChange = (e) => {
    this.setState({
      username: e.target.value,
    });
  };

  onKeyDown = (e) => {
    if(e.keyCode == 13){
      global.loggedInState = {
        p: e.target.value
      };
      this.handleLogin();
    }
  };

  render() {
    return (
      <LoginContainer>
        <CenteredWidget>
          <h1>Login</h1>
          <h4>(Input Password)</h4>
          <input type="text" onKeyDown={this.onKeyDown}/>
        </CenteredWidget>
      </LoginContainer>
    );
  }
}
