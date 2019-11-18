import React from 'react';
import { StyleSheet, View, TouchableOpacity, SafeAreaView, Text, Image } from 'react-native';
import { Button, TitleView, TabBarView, ContentView } from '../components';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.handlePress = this.handlePress.bind(this);
  }

  static navigationOptions = {
    title: 'Home',
  };

  handlePress(index) {
    this.contentView.changeTab(index)
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
          <TitleView/>
          <TabBarView handlePress={this.handlePress}/>
          <ContentView ref={(c) => this.contentView = c}/>
      </SafeAreaView>
    );
  }

}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'flex-start',
        flex:1,
        flexDirection:'column',
        backgroundColor: 'black'
    }
});