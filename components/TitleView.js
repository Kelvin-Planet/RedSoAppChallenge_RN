import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";

export default class TitleView extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={require('../assets/logo.png')} onLayout={this.resizeImage}></Image>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        height: 100,
        alignItems: 'center',
        justifyContent: 'center',
    },
});