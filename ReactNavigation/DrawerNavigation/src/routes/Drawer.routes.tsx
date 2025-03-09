import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../screen/HomeScreen";

const {Navigator,Screen} = createDrawerNavigator()

export function DrawerRoutes(){
    return(
        <Navigator>
            <Screen
            name="home"
            component={HomeScreen}
            />
            <Screen
            name="gallery"
            component={HomeScreen}
            />

        </Navigator>
    )
}