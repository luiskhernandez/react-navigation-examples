import React, { Component } from 'react'
import { View, Text, Button } from 'react-native'

const users = [
  {name: 'Kobe Bryant'},
  {name: 'Michael Jordan'},
  {name: 'Allen Iverson'},
]

class Home extends Component {

  static navigationOptions = {
    title: 'Home',
    headerBackTitle: 'Home'
  }

  render () {
    const { navigation: { navigate } } = this.props
    return (
       <View>
         {users.map((user, index) => (
           <Button
              key={index}
              title={`Chat with ${user.name}`}
              onPress={ () => navigate('Demo', { name: user.name }) }
           />
         ))}
       </View>
    )
  }
}

export default Home
