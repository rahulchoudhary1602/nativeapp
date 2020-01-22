import { createAppContainer } from 'react-navigation'
import { createDrawerNavigator } from 'react-navigation-drawer'
import StackRoutes from './StackRoutes'
import AboutRoute from './AboutRoute'
import AboutStack from './AboutRoute';

const MyDrawerNavigator = createDrawerNavigator({
    StackRoutes: {
        screen: StackRoutes,
    },
    AboutRoute: {
        screen: AboutStack,
    },
});

export default createAppContainer(MyDrawerNavigator)

