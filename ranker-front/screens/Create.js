import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  ScrollView,
  Dimensions,
  Button,
  TextInput,
  TouchableOpacity,
  Keyboard,
  Alert
 } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { createStackNavigator } from 'react-navigation';
import gql from "graphql-tag";

class Create extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }

handleSubmit(data) {
  client
            .mutate({
                mutaion: gql`
                {
                    createPost( title : data.title, content: data.content ) {
                    title
                    content
                    }
                }
                `
            })
            .then(result => console.log(result));
            return 0;
  //import client and mutation test + title repetation avoidance(mongoose)
  // fetch + mutationQuery / graphql server got it and resolver function call db.insert
}

  render(){
    return(
      <View>
        <View style={{
          backgroundColor: 'rgba(255,255,255,0.3)',
          marginBottom: 10,
          //paddingBottom: 40,
          shadowColor: 'grey',
          shadowOffset:{
            width: 0,
            height: 3
          },
          shadowOpacity: 10,
        flexDirection: 'row',
        //justifyContent: 'center'
        }}>
          <TouchableOpacity  
              activeOpacity={0.5} 
              style={{
                paddingTop: 25,
                paddingLeft: 15,
                paddingBottom: 7,
                //paddingRight: 10,
                alignItems: 'flex-start',
                flex:1
              }} 
              onPress={ 
                () => {
                  Alert.alert(
                    'EXIT',
                    'Are you sure?',
                    [
                      {text: 'NO', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
                      {text: 'YES', onPress: () => this.props.navigation.navigate('Stage')},
                    ],
                    { cancelable: false }
                  )
                } 
              }>
              <Icon name="ios-arrow-back" color='black' size={24}/>
          </TouchableOpacity>
          
          <TouchableOpacity
            activeOpacity={0.5}
            style={{
              paddingTop: 28,
              paddingRight: 15,
              //paddingLeft: 10,
              alignItems: 'flex-end',
              flex: 1
            }}
            onPress = {this.handleSubmit(this.state)}
          >
            <Text>Save</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            style={{
              fontSize: 30
            }}
            multiline = {false}
            placeholder = "Title."
            onChangeText={(title) => this.setState({title})}
          />
          <TextInput
            style={{
              height: 500,
              marginTop: 0,
              marginLeft: 0,
              marginRight: 0,
              fontSize: 20,
              backgroundColor: 'white',
              paddingTop: 20,
              paddingLeft: 20,
              paddingRight: 20,
              paddingBottom: 20
            }}
            multiline = {true}
            placeholder="Here to create."
            onChangeText={(content) => this.setState({content})}
            //onBlur={ () => Keyboard.dismiss() }
          />
          <Text style={{padding: 10, fontSize: 72}}>
          </Text>
      </View>
      </View>
    )
  }
}

export default Create;

    

/*<Icon 
name="ios-eye" 
color='black' 
size={24} 
style={{
  alignItems:'center',
  flex: 1,
  paddingTop: 28
}}
/>*/