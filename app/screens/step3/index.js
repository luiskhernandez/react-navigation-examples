import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

class Step3 extends Component {

  render () {
    const { navigation: { navigate, state: { params } } } = this.props
    return (
       <View>
           <Button
              title={`Go to step 4`}
              onPress={ () => navigate('Step4') }
           />
         <Text>Step 3</Text>
       </View>
    )
  }
}

export default Step3
