/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
} from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import User from "./component/UserManagement.tsx";
import UserDetail from "./component/UserDetails.tsx";
import {UserProvider} from "./hook/useUser.tsx";

const Stack = createStackNavigator();

function App(): React.JSX.Element {

  return (
      <UserProvider>
      <NavigationContainer>
        <SafeAreaView style={{ flex: 1 }}>
          <Stack.Navigator initialRouteName="User">
            <Stack.Screen name="User" component={User} />
            <Stack.Screen name="UserDetail" component={UserDetail} />
          </Stack.Navigator>
        </SafeAreaView>
      </NavigationContainer>
      </UserProvider>
  );
}


export default App;
