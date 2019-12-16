import React, { Component } from 'react';
import { Text, ScrollView, ActivityIndicator, StyleSheet, AsyncStorage } from 'react-native';

class AuthLoadingScreen extends Component {
    constructor() {
      super();
      this._bootstrapAsync();
    }
  
    // Fetch the token from storage then navigate to our appropriate place
    _bootstrapAsync = async () => {
      const userToken = await AsyncStorage.getItem('userToken');
      // This will switch to the App screen or Auth screen and this loading
      // screen will be unmounted and thrown away.
      const vm = this
      vm.props.navigation.navigate('Links');
      return;
      setTimeout(()=>{
        //   vm.props.navigation.navigate(userToken ? 'Main' : 'Auth');
          vm.props.navigation.navigate('Auth');
      }, 1000);
    };  

    render () {
        return (
            <ScrollView contentContainerStyle={styles.container}>
                <ActivityIndicator />
                <Text>
                    Loading Page
                </Text>
            </ScrollView>
        )
    }
}

// AuthLoadingScreen.navigationOptions = {
//   title: 'Links',
// };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center"
  },
});


export default AuthLoadingScreen