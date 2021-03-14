import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import MenuManager from '../../singletons/menu_manager';

export const Grid = styled.div`
 position: absolute;
 height: calc(100% - 1px);
 width: calc(100% - 2px);
 margin: 0;
 background-color: salmon;
 border-bottom: 1px solid #212121;
 border-right: 1px solid #212121;
 border-left: 1px solid #212121;
`;

export const Row = styled.div`
  display: flex;
  Height: 100%;
`;

export const Col = styled.div`
  flex: ${(props) => props.size};
  background-color: ${(props) => props.color};
`;

export const DropShadowCol = styled.div`
  flex: ${(props) => props.size};
  background-color: ${(props) => props.color};
  -webkit-box-shadow: 0px 4px 19px 0px #000000; 
  box-shadow: 0px 4px 19px 0px #000000;
  z-index = 1000;
`;



export default class LoggedIn extends Component {
  static propTypes = {
    onLogout: PropTypes.func.isRequired,
  };

  componentDidMount = () => {
    global.loadLoggedInMenu();
    document.body.style.margin = 0;
    document.body.style.backgroundColor = "#212121";
  };

  handleLogout = (e) => {
    this.props.onLogout({
      username: '',
      loggedIn: false,
    });
  };


  render() {
    return (
      <Grid onKeyDown={this.handleLogout}>
        <Row>
          <Col size={1} color="#1a1a1a"/>
          <Col size={1.5} color="#f8f8f8"/>
          <Col size={3.5} color="#ffffff"/>
        </Row>
      </Grid>
    );
  }
}
