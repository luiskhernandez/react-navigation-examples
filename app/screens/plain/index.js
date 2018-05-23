import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Plain extends Component {

  render () {
    const { navigation: { navigate, state: { params } } } = this.props
    return (
       <View>
         <Text>Plain</Text>
         <Button title='go to stack' onPress={() => navigate('Stack')} />
       </View>
    )
  }
}

export default Plain
