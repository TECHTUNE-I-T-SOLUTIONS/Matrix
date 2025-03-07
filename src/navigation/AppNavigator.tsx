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
import RegularSettingsScreen from '../screens/RegularSettingsScreen'; // New Settings screen
import MerchantScreen from '../screens/MerchantScreen';
import MerchantLogin from '../screens/MerchantLogin';
import MerchantSignup from '../screens/MerchantSignup';
import MerchantForgot from '../screens/MerchantForgot';
import MerchantHomeScreen from '../screens/MerchantHomeScreen';
import MerchantDisputeScreen from '../screens/MerchantDisputeScreen';
import MerchantOffersScreen from '../screens/MerchantOffersScreen';
import MerchantProfileScreen from '../screens/MerchantProfileScreen';
import MerchantSettingsScreen from '../screens/MerchantSettingsScreen';
import MerchantTopupScreen from '../screens/MerchantTopupScreen';
import MerchantMenuModal from '../components/MerchantMenuModal'; // New Merchant Menu Modal
import MenuScreen from '../components/MenuScreen'; // Regular Menu component (if needed)

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
        <Stack.Screen
          name="Settings"
          component={RegularSettingsScreen}
          options={{ headerShown: false }}
        />
        {/* Regular Menu Modal */}
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
        <Stack.Screen
          name="MerchantHome"
          component={MerchantHomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MerchantDispute"
          component={MerchantDisputeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MerchantOffers"
          component={MerchantOffersScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MerchantProfile"
          component={MerchantProfileScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MerchantSettings"
          component={MerchantSettingsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MerchantTopup"
          component={MerchantTopupScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MerchantMenu"
          component={MerchantMenuModal}
          options={{
            headerShown: false,
            presentation: 'transparentModal',
            cardStyle: { backgroundColor: 'transparent' },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
