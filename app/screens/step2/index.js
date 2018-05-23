import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Step2 extends Component {
  render () {
    const { navigation: { navigate, state: { params } } } = this.props
    return (
       <View>
           <Button
              title={`Go to step 3`}
              onPress={ () => navigate('Step3') }
           />
         <Text>Step 2</Text>
       </View>
    )
  }
}

export default Step2
