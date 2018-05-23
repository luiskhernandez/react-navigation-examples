import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Demo extends Component {

  render () {
    const { navigation: { navigate, state: { params } } } = this.props
    return (
       <View>
           <Button
              title={`go step 1`}
              onPress={ () => navigate('Step1') }
           />
         <Text>Demo</Text>
       </View>
    )
  }
}

export default Demo
