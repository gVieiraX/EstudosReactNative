import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import HomeScreen from "../screen/HomeScreen"
import GalleryScreen from "../screen/GalleryScreen"
import {MaterialCommunityIcons} from '@expo/vector-icons'

const {Navigator,Screen} = createBottomTabNavigator()

export  function BottomTabsRoutes(){

    return(
        <Navigator>
            <Screen 
            name='Home'
            component={HomeScreen}
            options={{
                tabBarIcon:({color,size})=>(
                    <MaterialCommunityIcons
                    name="home"
                    color='black'
                    size={size}
                    />
                )
            }}
            />

            <Screen 
            name='Gallery'
            component={GalleryScreen}
            options={{
                tabBarIcon:({color,size})=>(
                    <MaterialCommunityIcons
                    name="view-gallery"
                    color='black'
                    size={size}
                    />
                )
            }}
            />
        </Navigator>
    )
}