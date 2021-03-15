/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */


 import React from 'react';
 import {
  View
 } from 'react-native';
 import {NavigationContainer, DefaultTheme } from '@react-navigation/native';
 
 //import splash screen
 //import SplashScreen from  "react-native-splash-screen";
 
 
 
 import {Login} from "./screens";
 
 const theme = {
   ...DefaultTheme,
   colors:{
     ...DefaultTheme.colors,
     border: "transparent",
   }
 }
 
 
 const App  = () => {
 
  //Hide Splash screen on app load.
  //  React.useEffect(() => {
  //    SplashScreen.hide();
  //  });
   
   return (
     <NavigationContainer theme={theme}>
         <View style ={{flex: 1}}>
           <Login />
         </View>
     </NavigationContainer>
 );
 };
 
 
 
 export default () => {
   return <App />;
 };
 