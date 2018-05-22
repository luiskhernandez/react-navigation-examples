import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Home extends Component {
  render () {
    const { navigation: { navigate } } = this.props
    return (
       <View>
         <Text>Home</Text>
         <Button title='Go to Home' onPress={ () => navigate('Demo') } />
       </View>
    )
  }
}

export default Home
