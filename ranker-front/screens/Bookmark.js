import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/Ionicons';

class Bookmark extends React.Component {

  static navigationOptions = {
    //tabBarLabel:'BOOKMARK',
    tabBarIcon:({tintColor})=>(
      <Icon name="ios-bookmark" color={tintColor} size={24}/>
    )
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Here Bookmark</Text>
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

export default Bookmark;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
