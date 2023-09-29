import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Home from './src/Views/Home';
import Product from './src/Views/Product';
import Profile from './src/Views/Profile';
import Setting from './src/Views/Setting';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
const Tab = createBottomTabNavigator();
import {Provider} from 'react-redux';
import store from './src/Redux/store';
import Toast from 'react-native-toast-message';
import Test from './src/Views/Test';
const App: React.FC = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="Home" component={Home} />
          <Tab.Screen name="Product" component={Product} />
          <Tab.Screen name="Profile" component={Profile} />
          <Tab.Screen name="Settings" component={Setting} />
          <Tab.Screen name="Test" component={Test} />
        </Tab.Navigator>
        <Toast position="bottom" bottomOffset={20} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
