import React, { Component } from 'react';
import { View } from 'react-native';
import { Button, Card, CardSection, Input } from './common/';

class LoginForm extends Component {
  state = { text: '' };
  render() {
    return (
      <Card>
        <CardSection>
          <Input
          label="Email"
          value={this.state.text}
          onChangeText={text => this.setState({ text })}
          style={{ height: 20, width: 100 }}
          />
        </CardSection>
        <CardSection></CardSection>
        <CardSection>
          <Button>
            Log In
          </Button>
        </CardSection>
      </Card>
    );
  }
}

export default LoginForm;
