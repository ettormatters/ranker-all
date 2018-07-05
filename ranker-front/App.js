import React, {Component} from 'react';
import {
  Platform,
  StyleSheet, 
  Text, 
  View,
  Image,
  Button,
  SafeAreaView,
  ScrollView,
  Dimensions,
  TouchableOpacity
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import ApolloClient from "apollo-boost";
import { createBottomTabNavigator, createSwitchNavigator } from 'react-navigation';
import Bookmark from './screens/Bookmark';
import Profile from './screens/Profile';
import Ready from './screens/Ready';
import Create from './screens/Create';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

const client = new ApolloClient({
  uri: "localhost:4000/graphql"
});

class Stage extends Component {

  static navigationOptions = {
    //tabBarLabel:'STAGE',
    tabBarIcon:({tintColor})=>(
      <Icon name="ios-eye" color={tintColor} size={24}/>
    )
  }
  
  state = {}

  componentWillMount(){
    console.log("ComponentWillMount");
  }

  render() {
    let screenWidth = Dimensions.get('window').width;
    let screenHeight = Dimensions.get('window').height;
   
    return (
      <View style={{ 
        flex:1, 
        backgroundColor: 'white'
      }}>
              <ScrollView 
                horizontal={true} 
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
              >
                  <View style={{
                    backgroundColor: 'grey',
                    borderRadius: 20,
                    opacity: 10,
                    flex: 1,
                    marginTop: 60,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 30,
                    width: screenWidth-60,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text>Hello</Text>
                    <Text>one</Text>
                  </View>

                  <View style={{
                    backgroundColor: 'blue',
                    borderRadius: 10,
                    flex: 1,
                    marginTop: 60,
                    marginLeft: 30,
                    marginRight: 30,
                    marginBottom: 30,
                    width: screenWidth-60,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}>
                    <Text>Hello</Text>
                    <Text>two</Text>
                  </View>
            </ScrollView>
      </View>
    );
  }
}
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

export default Stage;

const styles = StyleSheet.create({
  
});
