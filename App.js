import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Launch, Home } from './screens';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

const MainNavigator = createStackNavigator({
  Launch: {screen: Launch},
  Home: {screen: Home}
});

const App = createAppContainer(MainNavigator);
export default App;

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
