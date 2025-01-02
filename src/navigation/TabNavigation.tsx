// src/navigation/TabNavigation.tsx
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import HomeScreen from '../screens/HomeScreen';
import CalendarScreen from '../screens/CalendarScreen';
import LibraryScreen from '../screens/LibraryScreen';
import MypageScreen from '../screens/MypageScreen';

const ROUTE_NAMES = {
  HOME: 'HOME',
  CALENDAR: 'CALENDAR',
  LIBRARY: 'LIBRARY',
  'MY PAGE': 'MY PAGE',
} as const;

type RouteNames = keyof typeof ROUTE_NAMES;

const Tab = createBottomTabNavigator();

const icons = {
  HOME: {name: 'home-sharp', component: Ionicons},
  CALENDAR: {name: 'calendar-outline', component: Ionicons},
  LIBRARY: {name: 'dumbbell', component: FontAwesome5},
  'MY PAGE': {name: 'person-outline', component: Ionicons},
} as const;

const getTabBarIcon = (name: RouteNames, color: string, size: number) => {
  const icon = icons[name];
  const IconComponent = icon.component;
  return <IconComponent name={icon.name} size={20} color={color} />;
};

const tabBarOptions = {
  tabBarActiveTintColor: '#000',
  tabBarInactiveTintColor: 'gray',
  headerShown: false,
};

const TabNavigation = () => (
  <Tab.Navigator
    screenOptions={({route}) => ({
      ...tabBarOptions,
      tabBarIcon: ({color, size}) =>
        getTabBarIcon(route.name as RouteNames, color, size),
    })}>
    <Tab.Screen name={ROUTE_NAMES.HOME} component={HomeScreen} />
    <Tab.Screen name={ROUTE_NAMES.CALENDAR} component={CalendarScreen} />
    <Tab.Screen name={ROUTE_NAMES.LIBRARY} component={LibraryScreen} />
    <Tab.Screen name={ROUTE_NAMES['MY PAGE']} component={MypageScreen} />
  </Tab.Navigator>
);

export default TabNavigation;
