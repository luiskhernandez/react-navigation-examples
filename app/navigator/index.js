import React, { Component } from 'react'
import TabA from 'app/screens/tabA'
import TabB from 'app/screens/tabB'
import TabC from 'app/screens/tabC'
import Plain from 'app/screens/plain'

import AppStack from './appStack'
import { AuthLoading } from 'app/screens/auth'
import AuthStack from './authStack'

import { createSwitchNavigator, StackNavigator, DrawerNavigator, TabNavigator } from 'react-navigation'

export default createSwitchNavigator(
  {
    AuthLoading: AuthLoading,
    App: AppStack,
    Auth: AuthStack,
  },
  {
    initialRouteName: 'AuthLoading',
  }
);

// export const Navigator = new StackNavigator({
//   Home: { screen: Home },
//   Demo: { screen: Demo },
//   Step1: { screen: Step1 },
//   Step2: { screen: Step2 },
//   Step3: { screen: Step3 },
//   Step4: { screen: Step4 },
// },{
//   initialRouteName: 'Home',
// })

// export const Tabs = TabNavigator({
//   TabA: { screen: Plain },
//   TabB: { screen: TabB },
//   TabC: { screen: TabC },
// },{
//   order: ['TabA', 'TabB', 'TabC']
// })

// export const Drawer = DrawerNavigator({
//   Tabs:  { screen: Tabs },
//   Plain: { screen: Plain },
//   Stack: { screen: Navigator },
// })

// class Nav extends Component {
//   render() {
//     return (
//       <Drawer />
//     )
//   }
// }

// export default Nav
