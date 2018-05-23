import React, { Component } from 'react'
import { View, Text, Button, TouchableOpacity } from 'react-native'
import styles from './styles'
const users = [
  {name: 'Kobe Bryant'},
  {name: 'Michael Jordan'},
  {name: 'Allen Iverson'},
]

const HeaderTitle = ({onPress}) => {
  return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.headerRightButton}>
         <Text>
           location
         </Text>
      </TouchableOpacity>
  )
}
const HeaderButton = ({onPress}) => {
  return (
      <TouchableOpacity
        onPress={onPress}
        style={styles.headerRightButton}>
         <Text>
            ✌︎
         </Text>
      </TouchableOpacity>
  )
}
class Home extends Component {

  static navigationOptions = {
    title: 'Home',
    headerBackTitle: 'Home',
    headerStyle: {
      height: 85,
    },
    headerTitle: <HeaderButton onPress={() => alert('center')} />,
    headerRight: <HeaderButton onPress={() => alert('right')} />,
    headerLeft: <HeaderButton onPress={() => alert('left')} />
  }

  render () {
    const { navigation: { navigate } } = this.props
    return (
       <View>
         {users.map((user, index) => (
           <Button
              key={index}
              title={`Chat with ${user.name}`}
              onPress={ () => navigate('Demo', { name: user.name, index: index }) }
           />
         ))}
       </View>
    )
  }
}

export default Home
