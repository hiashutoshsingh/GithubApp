import { createAppContainer, createStackNavigator } from 'react-navigation';

import Usergit from '../screens/Usergit';
import App form '../../App';

const MainNavigator  = createStackNavigator({

    Usergit: { screen: Usergit },
        App: {screen: App}
   
}, { headerMode: 'none' });

const AppNavigation = createAppContainer(MainNavigator);

export default AppNavigation;