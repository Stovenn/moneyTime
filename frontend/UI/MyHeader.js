import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle, Button, Icon} from 'native-base';

class MyHeader extends Component {
  render() {
    return (
        <Header style={{backgroundColor: "#202020"}}>
          <Left>
          <Button transparent>
              <Icon name='menu' style={{color: "#fff"}}/>
            </Button>
          </Left>
          <Body>
            <Icon type="FontAwesome" style={{color: "#fff"}} name="gitlab" />
          </Body>
          <Right />
        </Header>
    );
  }
}

export default MyHeader