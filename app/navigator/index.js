import React, { Component } from 'react'
import Home from 'app/screens/home'
import Demo from 'app/screens/demo'

import { StackNavigator } from 'react-navigation'

export const Navigator = new StackNavigator({
  Home: {
    screen: Home,
  },
  Demo: { screen: Demo },
},{
  initialRouteName: 'Home',
})

class Nav extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}

export default Nav
