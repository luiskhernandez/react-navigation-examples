import React, { Component } from 'react'
import Home from 'app/screens/home'
import Demo from 'app/screens/demo'
import TabA from 'app/screens/tabA'
import TabB from 'app/screens/tabB'
import TabC from 'app/screens/tabC'
import Plain from 'app/screens/plain'

import { StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation'

export const Navigator = new StackNavigator({
  Home: {
    screen: Home,
  },
  Demo: { screen: Demo },
},{
  initialRouteName: 'Home',
})

export const Tabs = TabNavigator({
  TabA: { screen: TabA },
  TabB: { screen: TabB },
  TabC: { screen: Navigator },
},{
  order: ['TabA', 'TabB', 'TabC']
})

export const Drawer = DrawerNavigator({
  Tabs:  { screen: Tabs },
  Stack: { screen: Navigator },
  Plain: { screen: Plain },
})

class Nav extends Component {
  render() {
    return (
      <Drawer />
    )
  }
}

export default Nav
