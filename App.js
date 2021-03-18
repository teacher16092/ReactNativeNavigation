import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createSwitchNavigator,createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Screen1 from './screens/Screen1';
import Screen2 from './screens/Screen2';
import {Icon} from  "react-native-elements";
import "react-native-vector-icons"
// this commented out code is the default code

/*
export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}*/

export default class App extends React.Component{
  
  render()
  {
    return <AppContainer/>
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

/* commenting the code as to use TabNavigator
const switchN = createSwitchNavigator({
  Screen1 :{screen:Screen1},
  Screen2 :{screen:Screen2}
})

*/

const switchN = createBottomTabNavigator(
{
  Screen1 :{screen:Screen1},
  Screen2 :{screen:Screen2}
},
{
  defaultNavigationOptions : ({navigation}) => ({
  tabBarIcon :({tintColor}) => {
    const routeName = navigation.state.routeName;
    if(routeName == "Screen1")
    {
      return < Icon name = "home" type ="entypo" color = {tintColor}/>; 
    }
 else if (routeName == "Screen2"){
<image  source = {require('./assets/favicon.png')}
style = {{width:30,height:30}} />

 };
  }
},
tabBarOptions : {
  activeTintColor : "#000708",
  inactiveTintColor : "#030303",
},
  )
},
);
const AppContainer = createAppContainer(switchN)