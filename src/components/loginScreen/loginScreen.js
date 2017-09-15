import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput, 
  TouchableHighlight
} from 'react-native';
import styles from './styles';
import BlueButton from '../blueButton/blueButton';

export default class LoginScreen extends Component {

  constructor(props) {
    //has initial/default values when the component is instantiated. Props parameter is the elements initial props value.
    super();
    this.state = {
      loggedIn: false,
      buttonText: "Log In"
    }
  }

  componentWillMount() {
    console.log("Mounting the component.")
  }
  
  handlePressEvent = () => {
    console.log("Handle Press Event")
    var currentState = this.state.loggedIn
    if (currentState) {
      this.setState ({
        loggedIn: !currentState,
        buttonText: "Log In"
      })
    }
    else {
      this.setState ({
        loggedIn: !currentState,
        buttonText: "Log Out"
      })
    }

  }

  render() {
    return (
      <View style={styles.container}>
          <BlueButton id = "temp" buttonText={this.state.buttonText} clickEvent={this.handlePressEvent}/>
      </View>
    );
  }

  componentDidMount() {
    console.log("Component is mounted.")
  }
}