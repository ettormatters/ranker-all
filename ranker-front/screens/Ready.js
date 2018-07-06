import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions,
  TouchableOpacity
 } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

class Ready extends React.Component {

    static navigationOptions = {
      tabBarIcon:({tintColor})=>(
        <Icon name="ios-create" color={tintColor} size={24}/>
      )
    }

    constructor(props){
        super(props);
        this.state={}
    }

  render(){
    return(
      <View style={{
        justifyContent: 'center',
        alignItems: 'center',
        flex:1
      }}>
        <TouchableOpacity
            onPress={ () => this.props.navigation.navigate('Create') }
        >
            <Text style={{ color: 'black' }}>Are you ready?</Text>
        </TouchableOpacity>
      </View>
    )
  }
}

export default Ready;
  
//renderCreateView: false
//this._renderCreateView = this._renderCreateView.bind(this);
//this._onPress = this._onPress.bind(this);
//