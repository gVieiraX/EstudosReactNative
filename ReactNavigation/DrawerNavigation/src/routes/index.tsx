import { NavigationContainer } from '@react-navigation/native'

// contexto
import { StackRoutes } from './stack.routes'
import {BottomTabsRoutes} from './bottom-tab.routes'
import { DrawerRoutes } from './Drawer.routes'

// caixa de contextos
export function Routes() {
  return (
    <NavigationContainer>
        <DrawerRoutes/>
    </NavigationContainer >
  )
}