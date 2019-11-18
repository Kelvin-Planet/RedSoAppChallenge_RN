import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";

export default class EmployeeCell extends Component {
    render() {
        const bgStyles = [
            styles.backgroundView,
            {backgroundColor:'black'}
        ]
        return (
            <TouchableOpacity style={bgStyles}>
                <Image
                    style={{borderRadius: 40, width: 80, height: 80, marginRight: 20}}
                    source={{uri: this.props.data.avatar}}></Image>
                <View style={{flex: 1, flexDirection: 'column'}}>
                    <Text style={styles.innerText}>{ this.props.data.name }</Text>
                    <Text style={styles.innerText}>{ this.props.data.position }</Text>
                    <Text style={styles.innerText}>{ 
                        Array(this.props.data.expertise).join() 
                    }</Text>
                </View>
            </TouchableOpacity>
        );
    }
    generateColor () {
        return '#' +  Math.random().toString(16).substr(-6);
    }
}

const styles = StyleSheet.create({
    backgroundView:{
      marginRight:0,
      marginBottom:0,
      padding:20,
      backgroundColor:'lightgray',
      borderRadius:6,
      borderWidth:0,
      borderColor:'red',
      height: 'auto',
      justifyContent: "flex-start",
      flexDirection: 'row',
    },
    innerText:{
      color: 'black',
      textAlign:'left',
      fontSize: 20,
      marginBottom:20,
      color: 'white'
    },
});