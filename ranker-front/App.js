import React, {Component} from 'react';
import {
  Platform,
  StyleSheet
} from 'react-native';
import ApolloClient from "apollo-boost";
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import Stage from './screens/Stage';
import Bookmark from './screens/Bookmark';
import Profile from './screens/Profile';
import Ready from './screens/Ready';
import Create from './screens/Create';
import { ApolloProvider } from "react-apollo";

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export const client = new ApolloClient({
  uri: "localhost:4000/graphql"
});

const AppBottom = createBottomTabNavigator({
  Stage: Stage,
  Bookmark: Bookmark,
  Profile: Profile,
  Ready: Ready
 },{
  tabBarOptions: {
    activeTintColor : 'black',
    inactiveTintColor : 'grey',
    showLabel: false,
    style: {
      backgroundColor: 'white',
      shadowColor: 'black',
      shadowOffset:{
        width: 100,
        height: 100
      },
      shadowOpacity: 1
    }
  }
 });

const AppSwitch =  createSwitchNavigator(
  {
    App: AppBottom,
    Create: Create
  },{
    initialRouteName: 'App'
  }
 );

class App extends Component {
  render(){
    return(
        < AppSwitch />
    )
  }
}

export default App; 

const styles = StyleSheet.create({
  
});
