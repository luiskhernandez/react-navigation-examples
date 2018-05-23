import { createStackNavigator } from 'react-navigation'
import { Home } from 'app/screens/app'

// import Home from 'app/screens/home'
import Demo from 'app/screens/demo'
import Step1 from 'app/screens/step1'
import Step2 from 'app/screens/step2'
import Step3 from 'app/screens/step3'
import Step4 from 'app/screens/step4'

export const Navigator = createStackNavigator({
  Home: { screen: Home },
  Demo: { screen: Demo },
  Step1: { screen: Step1 },
  Step2: { screen: Step2 },
  Step3: { screen: Step3 },
  Step4: { screen: Step4 },
},{
  initialRouteName: 'Home',
})

// const AppStack = createStackNavigator({ Home });
export default Navigator
