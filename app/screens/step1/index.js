import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Step1 extends Component {

  render () {
    const { navigation: { navigate, state: { params } } } = this.props
    return (
       <View>
           <Button
              title={`Go to step 2`}
              onPress={ () => navigate('Step2') }
           />
         <Text>Step 1</Text>
       </View>
    )
  }
}

export default Step1
