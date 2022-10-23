import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserCtx from './userCtx';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import Form from './screens/Form';
import ForgotPassword from './screens/ForgotPassword';
import Auth from './screens/Auth';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator()

const App = () => {
  console.log("App runs...")
  console.log(user?.email);
  const [user, setUser] = useState({ email: '' })
  const getUserFromAsyncStorage = async () => {
    try {
      const userEmail = await AsyncStorage.getItem('email')
      console.log(`user email from getUserFrom... ${userEmail}`);
      return userEmail !== null ? setUser(prev => ({ ...prev, email: userEmail })) : null
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    const savedUser = getUserFromAsyncStorage()
    console.log(`Saved user: ${savedUser}`);

  }, [])


  return (
    <UserCtx.Provider value={{ user, setUser }}>
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
          {user?.email ?
            <Stack.Screen name="Auth" component={Auth} options={{ title: "access granted" }} />
            :
            <>
              <Stack.Screen name='Home' component={HomeScreen} options={{ title: "We begin here" }} />
              <Stack.Screen name='Login' component={LoginScreen} options={{ title: "logueate 😺" }} />
              <Stack.Screen name='Form' component={Form} options={{ title: "Formik & Yup" }} />
              <Stack.Screen name='ForgotPassword' component={ForgotPassword} options={{ title: "Password recovery" }} />
            </>
          }
        </Stack.Navigator>
      </NavigationContainer>
    </UserCtx.Provider>
  )
}

export default App