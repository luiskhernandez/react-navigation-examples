import React, { Component } from 'react'
import { View, Text, Button, AsyncStorage } from 'react-native'

class Home extends Component {

  _signOutAsync = async () => {
    await AsyncStorage.clear();
    this.props.navigation.navigate('Auth');
  }

  _start = () => {
    this.props.navigation.navigate('Step1')
  }

  render () {
    const { navigation: { navigate, state: { params } } } = this.props
    return (
       <View>
           <Button title="Actually, sign me out :)" onPress={this._signOutAsync} />
           <Button title="stack" onPress={this._start} />
         <Text>Home</Text>
       </View>
    )
  }
}

export default Home
