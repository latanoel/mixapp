import React, { Component } from "react"
import {
    Button, 
    TextInput, 
    View, 
    StyleSheet,
    Alert
} from "react-native"

class LoginScreen extends Component {
    constructor () {
        super()
        this._doSignIn = this._doSignIn.bind(this)
        this.state = {
            username:'',
            password:''
        }
    }

    _doSignIn () {
        this.props.navigation.navigate("Main")
        Alert.alert('Hello', )
    }

    handleInput (e) {
        const { name, value } = e.target

    }

    onLogin() {
        const { username, password } = this.state;
    
        Alert.alert('Credentials', `${username} + ${password}`)
      }

    render () {
        return (
            <View style={styles.container}>
                { true && <View>
                    <TextInput
                    value={this.state.username}
                    onChangeText={(username) => this.setState({ username })}
                    placeholder={'Username'}
                    style={styles.input}
                    />
                    <TextInput
                    value={this.state.password}
                    onChangeText={(password) => this.setState({ password })}
                    placeholder={'Password'}
                    secureTextEntry={true}
                    style={styles.input}
                    />
                    
                    <Button
                    title={'Login'}
                    style={styles.input}
                    onPress={this._doSignIn}
                    />
                </View> }
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    input: {
      width: 200,
      height: 44,
      padding: 10,
      borderWidth: 1,
      borderColor: 'black',
      marginBottom: 10,
    },
})

export default LoginScreen