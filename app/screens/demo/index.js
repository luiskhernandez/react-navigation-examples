import React, { Component } from 'react'
import { View, Text } from 'react-native'

class Demo extends Component {
  static navigationOptions = ({navigation }) => ({
    title: navigation.state.params.name
  })

  render () {
    const { navigation: { state: { params } } } = this.props
    return (
       <View>
         <Text>{`Chat with ${params.name}`}</Text>
       </View>
    )
  }
}

export default Demo
