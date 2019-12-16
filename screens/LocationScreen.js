import React from "react"
import { Platform, Text, View, Button, StyleSheet } from "react-native"
import Constants from "expo-constants"
import * as Location from "expo-location"
import * as Permissions from "expo-permissions"

export default class extends React.Component {
    constructor () {
        super()
        this.state = {
            location: null,
            errorMessage: null
        }
    }

    componentWillMount () {
        if(Platform.OS=="andriod" && !Constants.isDevice) {
            this.setState({errorMessage: "Use a device to view location data"})
        } else {
            this._getLocation()
        }
    }

    _getLocation = async () => {
        let { status } = await Permissions.askAsync(Permissions.LOCATION)

        if (status !== 'granted') {
            this.setState({
              errorMessage: 'Permission to access location was denied',
            });
          }
      
        let location = await Location.getCurrentPositionAsync({});
        this.setState({ location });
    }
    
    render() {
        let text = 'Waiting...';
        if (this.state.errorMessage) {
        text = this.state.errorMessage;
        } else if (this.state.location) {
        text = JSON.stringify(this.state.location);
        }

        return (
        <View style={styles.container}>
            <Text style={styles.paragraph}>{text}</Text>
            <Button title="Refresh" onPress={() => this._getLocation() } ></Button>
        </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: Constants.statusBarHeight,
      backgroundColor: '#ecf0f1',
    },
    paragraph: {
      margin: 24,
      fontSize: 18,
      textAlign: 'center',
    },
  });