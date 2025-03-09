import { createStackNavigator } from "@react-navigation/stack";

import MainScreen from '../screens/MainScreen'
import SkillsScreen from '../screens/SkillsScreen'

const { Screen, Navigator } = createStackNavigator()

export function StackRoutes(){
    return(
        <Navigator>
            
            <Screen
            name='Main Screen'
            component={MainScreen}
            />
            
            <Screen
            name='Skills Screen'
            component={SkillsScreen}
            />
            
        </Navigator>
    )
}