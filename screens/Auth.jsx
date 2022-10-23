import { View, Text, Pressable } from 'react-native'
import React, { useContext } from 'react'
import UserCtx from '../userCtx'
import { getAuth } from 'firebase/auth'
import { styles } from '../styles/styles'
import AsyncStorage from '@react-native-async-storage/async-storage'

const auth = getAuth()

const Auth = () => {
  const { user, setUser } = useContext(UserCtx)
  const logout = () => {
    auth.signOut().then(() => {
      console.log('we should delete user from storage');
      setUser({ email: '' })
      deleteUserFromAsyncStorage('email')
    }).catch(err => console.log(err))

    const deleteUserFromAsyncStorage = async (key) => {
      try {
        await AsyncStorage.removeItem(key)
      } catch (err) {
        console.log(err);
      }
    }

  }
  return (
    <View style={styles.container}>
      <Text>Hola {user.email || 'no hay user...'}</Text>
      <Pressable style={[styles.button, styles.bgRebeccaPurple]} onPress={logout}>
        <Text style={[styles.buttonText, styles.textLight]}>logout</Text>
      </Pressable>
    </View>
  )

}

export default Auth