import React, { Component } from 'react';
import { Container, Header, Left, Body, Right, Title, Subtitle, Button, Icon} from 'native-base';

export default class MyHeader extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left>
          <Button transparent onPress={() => this.props.navigation.navigate.goBack()}>
              <Icon type="FontAwesome" name='chevron-left' style={{color: "#cc3434"}} />
            </Button>
          </Left>
          <Body>
            <Icon type="FontAwesome" name="gitlab" />
          </Body>
          <Right />
        </Header>
      </Container>
    );
  }
}

