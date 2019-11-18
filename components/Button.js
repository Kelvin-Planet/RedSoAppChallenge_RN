import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";

export default class RoundedText extends Component {
    press() {
      this.props.handlePress(this.props.data)
      //alert(this.props.data)
    }
    render() {
      const bgStyles = [
        styles.backgroundView,
        {backgroundColor:'gray'}
      ]
      return (
        <TouchableOpacity style={bgStyles} onPress={this.press.bind(this)}>
            <Text style={styles.innerText}>{ this.props.children }</Text>
        </TouchableOpacity>
      );
    }
    generateColor () {
        return '#' +  Math.random().toString(16).substr(-6);
    }
}

const styles = StyleSheet.create({
    backgroundView:{
      marginRight:10,
      marginBottom:10,
      paddingLeft:10,
      paddingRight:10,
      backgroundColor:'lightgray',
      borderRadius:6,
      borderWidth:0,
      borderColor:'red',
      height: 60,
      justifyContent: 'center',
    },
    innerText:{
      color: 'black',
      textAlign:'center',
      fontSize: 18
    },
});