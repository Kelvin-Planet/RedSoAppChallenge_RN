import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View, Dimensions } from "react-native";
import Image from 'react-native-scalable-image';

export default class BannerCell extends Component {

    constructor(){
        super();
    }

    render() {
        const bgStyles = [
            styles.backgroundView,
            {backgroundColor:'white'}
        ]
        return (
            <Image
                width={Dimensions.get('window').width}
                source={{uri: this.props.data.url}}></Image>
        );
    }
    
    generateColor () {
        return '#' +  Math.random().toString(16).substr(-6);
    }

    componentDidMount(){

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
      flexDirection: 'row'
    },
    innerText:{
      color: 'black',
      textAlign:'left',
      fontSize: 20,
      marginBottom:20
    },
});