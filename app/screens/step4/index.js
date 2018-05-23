import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Step4 extends Component {

  render () {
    const { navigation: { navigate, state: { params } } } = this.props
    return (
       <View>
           <Button
              title={`reset`}
              onPress={ () => navigate('Home') }
           />
         <Text>Step 4</Text>
       </View>
    )
  }
}

export default Step4
