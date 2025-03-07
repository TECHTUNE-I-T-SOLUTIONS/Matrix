import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import RegularUserScreen from '../screens/RegularUserScreen';
import RegularLoginScreen from '../screens/RegularLoginScreen';
import RegularSignupScreen from '../screens/RegularSignupScreen';
import RegularForgotScreen from '../screens/RegularForgotScreen';
import RegularHomeScreen from '../screens/RegularHomeScreen';
import RegularOffersScreen from '../screens/RegularOffersScreen';
import RegularProfileScreen from '../screens/RegularProfileScreen';
import RegularTopupScreen from '../screens/RegularTopupScreen';
import RegularDisputeScreen from '../screens/RegularDisputeScreen';
import MerchantScreen from '../screens/MerchantScreen';
import MerchantLogin from '../screens/MerchantLogin';
import MerchantSignup from '../screens/MerchantSignup';
import MerchantForgot from '../screens/MerchantForgot';
import MenuScreen from '../components/MenuScreen'; // New Menu component

const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Splash">
        {/* Splash Screen */}
        <Stack.Screen
          name="Splash"
          component={SplashScreen}
          options={{ headerShown: false }}
        />
        {/* Onboarding Screen */}
        <Stack.Screen
          name="Onboarding"
          component={OnboardingScreen}
          options={{ headerShown: false }}
        />
        {/* Regular User Screens */}
        <Stack.Screen
          name="RegularUser"
          component={RegularUserScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegularLogin"
          component={RegularLoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegularSignup"
          component={RegularSignupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegularForgot"
          component={RegularForgotScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="RegularHome"
          component={RegularHomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Offers"
          component={RegularOffersScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={RegularProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="TopUp"
          component={RegularTopupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dispute"
          component={RegularDisputeScreen}
          options={{ headerShown: false }}
        />
        {/* Menu Screen */}
        <Stack.Screen
          name="Menu"
          component={MenuScreen}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            cardStyle: { backgroundColor: 'transparent' },
          }}
        />
        {/* Merchant Screens */}
        <Stack.Screen
          name="Merchant"
          component={MerchantScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MerchantLogin"
          component={MerchantLogin}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MerchantSignup"
          component={MerchantSignup}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MerchantForgot"
          component={MerchantForgot}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
