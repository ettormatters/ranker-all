import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class Profile extends React.Component {

  static navigationOptions = {
    //tabBarLabel:'PROFILE',
    tabBarIcon:({tintColor})=>(
      <Icon name="ios-at" color={tintColor} size={24}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Me Profile</Text>
        <Button
              style={{
                //marginBottom: 110
              }}
              onPress={ () => this.props.navigation.openDrawer() }
              title="OpenDrawer"
              color='black'
              //accessibilityLabel="Learn more about this purple button"
            />
      </View>
    );
  }
}

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
