import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen.js';
import RestaurantScreen from './screens/RestaurantScreen.js';
import CartScreen from './screens/CartScreen.js';
import PreparingOrderScreen from './screens/PreparingOrderScreen.js';
import DeliveryScreen from './screens/DeliveryScreen.js';

const Stack = createNativeStackNavigator();

export default function Navigation() {
    return (
      <NavigationContainer>
          <Stack.Navigator 
          screenOptions={{
            headerShown:false
          }}
          initialRouteName='Home'>
              <Stack.Screen name="Home" component={HomeScreen} />
              <Stack.Screen name="Restaurant" component={RestaurantScreen} />
               <Stack.Screen name="Cart" options={{ presentation: 'modal', headerShown: false }} component={CartScreen} />
              <Stack.Screen name="PreparingOrder" options={{ presentation: 'fullScreenModal', headerShown: false }} component={PreparingOrderScreen} />
             <Stack.Screen name="Delivery" options={{ presentation: 'fullScreenModal', headerShown: false }} component={DeliveryScreen} />
          </Stack.Navigator>
      </NavigationContainer>
    );
  }