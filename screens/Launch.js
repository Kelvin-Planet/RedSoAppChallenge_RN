import React from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text } from 'react-native';
import { Button } from '../components';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  static navigationOptions = {
    title: 'Welcome',
  };

  handlePress(data) {
    const {navigate} = this.props.navigation;
    navigate('Home', {name: 'Home'})
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <Button handlePress={this.handlePress}>Start App</Button>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
    container: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
    }
});