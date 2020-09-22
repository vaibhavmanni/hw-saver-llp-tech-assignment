import React, { Component } from "react";
import { Menu } from "semantic-ui-react";
import firebase from "../../firebase";
import {Link} from 'react-router-dom'

export default class Navigation extends Component {
  state = { };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  handleSignout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => console.log("signed out!"));
  };
  render() {
    const { activeItem } = this.state;

    return (
        <Menu secondary style={{padding: ' 0 30px', paddingTop: '2rem'}}>
          <Menu.Item
            name="home"
            active={activeItem === "home"}
            onClick={this.handleItemClick}
            as={Link} to='/home'
          />
        <Menu.Item
          name="images"
          active={activeItem === "images"}
          onClick={this.handleItemClick}
          as={Link} to='/images'
        />
        <Menu.Item
          name="posts"
          active={activeItem === "posts"}
          onClick={this.handleItemClick}
          as={Link} to='/posts'
        />
        <Menu.Item
          name="albums"
          active={activeItem === "albums"}
          onClick={this.handleItemClick}
          as={Link} to='/albums'
        />
        <Menu.Menu position="right">
          <Menu.Item
            name="logout"
            active={activeItem === "logout"}
            onClick={this.handleSignout}
          />
        </Menu.Menu>

      </Menu>
    );
  }
}
