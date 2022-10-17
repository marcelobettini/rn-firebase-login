import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Form from './screens/Form';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: 'black',
        },
        headerTintColor: 'orange',
        headerTitleStyle: {
          fontWeight: 'bold',
        }
      }}>
        <Stack.Screen name='Home' component={HomeScreen} options={{ title: "We begin here" }} />
        <Stack.Screen name='Login' component={LoginScreen} options={{ title: "logueate 😺" }} />
        <Stack.Screen name='Form' component={Form} options={{ title: "Formik & Yup" }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App