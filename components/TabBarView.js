import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, Image, View } from "react-native";
import { withOrientation } from "react-navigation";

class TabBarItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSelected: this.props.isSelected
        }
    }
    renderRedLine() {
        if (this.state.isSelected) {
            return <View style={{backgroundColor: 'red', height:6, width:'auto'}}></View>
        }
    }
    press() {
        this.props.handlePress(this.props.name)
    }
    render() {
        return (
            <TouchableOpacity style={{flexDirection: 'column'}} onPress={this.press.bind(this)}>
                <Text style={styles.innerText}>{ this.props.name }</Text>
                { this.renderRedLine() }
            </TouchableOpacity>
        );
    }
    setActive(f) {
        this.setState({ isSelected: f})
    }
}

export default class TabBarView extends Component {
    constructor(props) {
        super(props);
        this.handlePress = this.handlePress.bind(this);
    }
    handlePress(data) {
        if (data == 'Rangers') {
            this.Rangers.setActive(true)
            this.Elastic.setActive(false)
            this.Dynamo.setActive(false)
            this.props.handlePress(0)
        }
        if (data == 'Elastic') {
            this.Rangers.setActive(false)
            this.Elastic.setActive(true)
            this.Dynamo.setActive(false)
            this.props.handlePress(1)
        }
        if (data == 'Dynamo') {
            this.Rangers.setActive(false)
            this.Elastic.setActive(false)
            this.Dynamo.setActive(true)
            this.props.handlePress(2)
        }
    }
    render() {
        return (
            <View style={{flexDirection:'row'}}>
                <TabBarItem ref={(c) => this.Rangers = c} name={'Rangers'} isSelected={true} handlePress={this.handlePress}/>
                <TabBarItem ref={(c) => this.Elastic = c} name={'Elastic'} isSelected={false} handlePress={this.handlePress}/>
                <TabBarItem ref={(c) => this.Dynamo = c} name={'Dynamo'} isSelected={false} handlePress={this.handlePress}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    innerText:{
        color: 'white',
        fontSize: 20,
        padding: 10,
        alignSelf:'center'
      },
});