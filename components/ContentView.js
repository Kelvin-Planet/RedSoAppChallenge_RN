import React, { Component } from "react";
import { StyleSheet, TouchableOpacity, Text, View, FlatList, ActivityIndicator, RefreshControl, Dimensions } from "react-native";
import { EmployeeCell, BannerCell } from '../components';

export default class ContentView extends Component {

    constructor(props)
    {
      super(props);
      this.page = 0;
      this.teams = ["rangers","elastic","dynamo"];
      this.loadingPage = 0
      this.selectedTeamIndex = 0
      this.state = { 
          isLoading: true, 
          isRefreshing: false,
          dataSource: [],
        }
      this.fetchedData = []
    }

    changeTab(index) {
        this.loadingPage = 0
        const url = 'https://us-central1-redso-challenge.cloudfunctions.net/catalog?team=' + this.teams[index] + '&page=' + this.loadingPage;
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.results.length > 0){ this.loadingPage += 1 }
            this.setState({ dataSource: responseJson.results })
        })
        .catch((error) =>{
          console.error(error);
        });
    }

    render() {
        return (
            <FlatList
                style = {{backgroundColor: 'black'}}
                data={ this.state.dataSource }
                refreshControl={
                    <RefreshControl
                      refreshing={this.state.isRefreshing}
                      onRefresh={this.onRefresh.bind(this)}
                    />}
                renderItem={
                    ({item}) => {
                        if (item.type == "banner") {
                            return <BannerCell style={styles.item} data={item} ></BannerCell>
                        }else if (item.type == "employee") {
                            return <EmployeeCell style={styles.item} data={item}></EmployeeCell>
                        }else {
                            return <Text></Text>
                        }
                    }
                }
                keyExtractor={(item, index) => index.toString()}
                ItemSeparatorComponent={this.renderSeparator}
                onEndReachedThreshold={0.4}
                onEndReached={this.handleLoadMore.bind(this)}
            />
        );
    }

    onRefresh() {
        this.setState({ isRefreshing: true }); 
        this.loadingPage = 0
        const url = 'https://us-central1-redso-challenge.cloudfunctions.net/catalog?team=' + this.teams[this.selectedTeamIndex] + '&page=' + this.loadingPage;
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.results.length > 0){ this.loadingPage += 1 }
            this.setState({ isRefreshing: false, dataSource: responseJson.results })
        })
        .catch((error) =>{
          console.error(error);
        });
    }

    handleLoadMore = () => {
        this.setState({ isLoading: true })
        const url = 'https://us-central1-redso-challenge.cloudfunctions.net/catalog?team=' + this.teams[this.selectedTeamIndex] + '&page=' + this.loadingPage;

        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
            if (responseJson.results.length > 0){ 
                this.loadingPage += 1 
                let listData = this.state.dataSource;
                let data = listData.concat(responseJson.results)
                this.setState({ isLoading: false, dataSource: data })
            }
        })
        .catch((error) =>{
          console.error(error);
        });
    };

    loadData() {
        fetch('https://us-central1-redso-challenge.cloudfunctions.net/catalog?team=' + this.teams[this.selectedTeamIndex] + '&page=' + this.loadingPage)
          .then((response) => response.json())
          .then((responseJson) => {
            if (responseJson.results.length > 0){ this.loadingPage += 1 }
            this.setState({
              isLoading: false,
              dataSource: responseJson.results,
            }, function(){
                
            });
          })
          .catch((error) =>{
            console.error(error);
          });
    }

    componentDidMount(){
        this.loadData()
    }

    renderFooter = () => {
        if (!this.state.isLoading) return null;
        return (
            <ActivityIndicator
                style={{ color: '#fff' }}
            />
        );
    };

    renderSeparator = () => {
        return (
            <View
                style={{
                    height: 0,
                    width: '100%',
                    backgroundColor: '#CED0CE'
                }}
            />
        );
    };

}

const styles = StyleSheet.create({

});