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

  export default Stage;