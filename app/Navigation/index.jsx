import { Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Home from '../Screens/Home';
import Notifiactions from '../Screens/Notifiactions'; 
import Profile from '../Screens/Profile';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Listing from '../Screens/Listing';
import BookMarked from '../Screens/BookMarked';
import Dashboard from '../Screens/Dashboard';
import Add from '../Screens/Add';
import Chat from '../Screens/Chat';
import Explore from '../Screens/Explore';

const Stack = createNativeStackNavigator();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name={"Feed"} component={MyTabs} options={{ headerShown: false }} />
        <Stack.Screen name={"Listing"} component={Listing} />
        <Stack.Screen name={"BookMark"} component={BookMarked} />
        <Stack.Screen name={"Notifications"} component={Notifiactions} />
        <Stack.Screen name={"Profile"} component={Profile} />

    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Feed"
      screenOptions={{
        tabBarActiveTintColor: '#4668D6',
      }}
    >
      <Tab.Screen
        name="Feed"
        component={Home}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Dashboard"
        component={Dashboard}
        options={{
          tabBarLabel: 'Dashboard',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="view-dashboard-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          tabBarLabel: '',
          tabBarLabelStyle: {
            fontSize: 1
          },
          tabBarIconStyle:{
            bottom: 20
          },
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="plus-circle" color={color} size={50} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="chat-processing-outline" color={color} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={Explore}
        options={{
          tabBarLabel: 'Explore',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="search-web" color={color} size={size} />
          ),
        }}
      />
      
    </Tab.Navigator>
  );
}

export default RootNavigator;