import { createStackNavigator } from '@react-navigation/stack'

const { Screen, Navigator } = createStackNavigator()

import HomeScreen from '../screen/HomeScreen'
import GalleryScreen from '../screen/GalleryScreen'

export function StackRoutes() {
  return (
    <Navigator>
      <Screen
        name='home'
        component={HomeScreen}
        options={{
          title: 'Main Menu',
        }}
      />

      <Screen
        name='gallery'
        component={GalleryScreen}
      />
    </Navigator>
  )
}
