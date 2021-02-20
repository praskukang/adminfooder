import React from 'react';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { InputMenu, InputDrink } from '../pages';

// const Stack = createStackNavigator();
// const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

const Router = () => {
    return (      

        <Tab.Navigator>
            <Tab.Screen name="Input Food" component={InputMenu} />
            <Tab.Screen name="Input Drink" component={InputDrink} />
        </Tab.Navigator>

        // <Drawer.Navigator initialRouteName="Input Makanan">
        //     <Drawer.Screen name="Input Makanan" component={Test1} />
        //     <Drawer.Screen name="Input Minuman" component={Test2} />
        // </Drawer.Navigator>
      
        // <Stack.Navigator>
        //     <Stack.Screen
        //         name="Tabbar"
        //         component={Tabbar}
        //         options={{ headerShown: false }}
        //     />
        // </Stack.Navigator>
    );
};

export default Router;
