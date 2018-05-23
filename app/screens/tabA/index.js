import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class TabA extends Component {

  render () {
    const { navigation: { navigate } } = this.props
    return (
       <View>
         <Text>TabA</Text>
         <Button title='plain' onPress={ () => navigate('Stack')} />
       </View>
    )
  }
}

export default TabA
