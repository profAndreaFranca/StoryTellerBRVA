import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Home from '../screens/Home';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
      <Drawer.Navigator initialRouteName="Tabs">
        <Drawer.Screen name="Tabs" component={TabNavigator} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
      </Drawer.Navigator>
  );
}